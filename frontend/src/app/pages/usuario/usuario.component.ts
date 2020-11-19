import { Component, OnInit } from "@angular/core";
import { Usuario } from '../../model/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: "app-usuario",
  templateUrl: "usuario.component.html",
  styleUrls: ["./usuario.component.css"]
})
export class UsuarioComponent implements OnInit {

  usuarioData: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.listaUsuarios();
  }

  private listaUsuarios() {
    this.usuarioService.getAll().subscribe((response: any) => {
      this.usuarioData = response.data;
      console.log(this.usuarioData);
    });
  }
}
