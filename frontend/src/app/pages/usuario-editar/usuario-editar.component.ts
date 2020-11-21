import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { EscolaridadeService } from '../../services/escolaridade.service';
import { Escolaridade } from '../../model/escolaridade.model';
import * as moment from 'moment';
import swal from 'sweetalert2';
import { MensagemService, SweetAlertType } from '../../services/mensagem.service';

@Component({
  selector: "app-usuario-editar",
  templateUrl: "usuario-editar.component.html",
  styleUrls: ["./usuario-editar.component.css"]
})
export class UsuarioEditarComponent implements OnInit {

  formUsuario: FormGroup;
  form: FormArray;
  id: number;
  usuario: Usuario;
  escolaridadeData: Escolaridade[];

  constructor(private _fb: FormBuilder,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private escolaridadeService: EscolaridadeService,
    private router: Router,
    private mensagem: MensagemService,
  ) {

    this.formUsuario = this._fb.group({
      idUsuario: ['', Validators.required],
      nome: ['', Validators.required],
      sobreNome: ['', Validators.required],
      email: ['', Validators.required],
      dtNascimento: [''],
      codEscolaridade: ['']
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
      dtNascimento: moment( model.dtNascimento).format('YYYY-MM-DD'),
      codEscolaridade: model.codEscolaridade
    });
  }

  getListaEscolaridade() {

    this.escolaridadeService.getAll().subscribe((response: any) => {
      this.escolaridadeData = response.data;
    });

  }
  onSubmit() {
    this.usuarioService.update(this.formUsuario.value).subscribe((response: any) => {
      if (response.showmessage === true) {
        if (response.erro === true)
          this.mensagem.simple(response.message, SweetAlertType.error, 4000);
        else {
          this.mensagem.simple(response.message, SweetAlertType.success, 2000);
          this.router.navigate(['usuario']);
        }
      }
    });
  }
}
