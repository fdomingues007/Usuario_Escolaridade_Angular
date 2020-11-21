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
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MensagemService, SweetAlertType } from '../../services/mensagem.service';

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
    private router: Router,
    private mensagem: MensagemService
  ) {

    this.formUsuario = this._fb.group({
      nome: ['', Validators.required],
      sobreNome: [''],
      email: ['', Validators.required],
      dtNascimento: [''],
      codEscolaridade: ['1']
    });
  }

  ngOnInit() {
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
      if (response.showmessage) {
        if (response.erro)
          this.mensagem.simple(response.message,SweetAlertType.error,4000);
        else {
          this.mensagem.simple(response.message,SweetAlertType.success,2000);
          this.router.navigate(['usuario']);
        }
      }
    });
  }
}