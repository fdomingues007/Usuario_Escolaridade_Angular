import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: "app-usuario",
  templateUrl: "usuario.component.html",
  styleUrls: ["./usuario.component.css"]
})
export class UsuarioComponent implements OnInit {

  usuarioData: Usuario[] = [];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.listaUsuarios();
  }

  private listaUsuarios() {
    this.usuarioService.getAll().subscribe((response: any) => {
      this.usuarioData = response.data;
      console.log(this.usuarioData);
    });
  }

  novoUsuario(){
    this.router.navigate(['usuario-novo']);
  }

  openConfirmsSwal(item: any) {
    swal({
      title: 'Excluir o Usuário',
      text: 'Você tem certeza de Excluir o Usuário?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, exclua!',
      cancelButtonText: 'Não, Cancelar!'
    }).then((result) => {
      if (result.value) {
        this.delete(item);
      }
    });
  }

  delete(item: any) {
   alert('Fabão');
  }
}
