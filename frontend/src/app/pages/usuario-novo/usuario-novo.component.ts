import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { EscolaridadeService } from '../../services/escolaridade.service';
import { Escolaridade } from '../../model/escolaridade.model';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: "app-usuario-novo",
  templateUrl: "usuario-novo.component.html",
  styleUrls: ["./usuario-novo.component.css"]
})
export class UsuarioNovoComponent implements OnInit {

  formUsuario: FormGroup;
  form: FormArray;
  id: number;
  usuario: Usuario;
  escolaridadeData: Escolaridade[];

  constructor(private _fb: FormBuilder,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private escolaridadeService: EscolaridadeService,
    private router: Router
  ) {

    this.formUsuario = this._fb.group({
      nome: ['Fabio', Validators.required],
      sobreNome: ['Domingues', Validators.required],
      email: ['fabio@gmail.com', Validators.required],
      dtNascimento: ['1976-05-20'],
      codEscolaridade: ['1']
    });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getUsuarioById(this.id);
    this.getListaEscolaridade();
  }

  getUsuarioById(id: any) {
    this.usuarioService.getId(id).subscribe((response: any) => {
      this.setValuesUsuario(response.data);
    });
  }

  setValuesUsuario(model: Usuario) {
    this.formUsuario.patchValue({
      idUsuario: model.idUsuario,
      nome: model.nome,
      sobreNome: model.sobreNome,
      email: model.email,
      dtNascimento: moment(model.dtNascimento).format('YYYY-MM-DD'),
      codEscolaridade: model.codEscolaridade
    });
  }

  getListaEscolaridade() {

    this.escolaridadeService.getAll().subscribe((response: any) => {
      this.escolaridadeData = response.data;
    });

  }

  onSubmit() {
    this.usuarioService.create(this.formUsuario.value).subscribe((response: any) => {
      if (response.showmessage === true) {
        this.getMessage(response);
        this.router.navigate(['usuario']);
      }
    });
  }

  private getMessage(response: any) {
    Swal({
      title: response.message,
      type: 'success',
      showConfirmButton: false,
      timer: 1500
    });
  }
}
