import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class MensagemService {

  constructor() { }

   sucesso(titulo: string, tempo?:number) {
    Swal({
      title: titulo,
      type: 'success',
      showConfirmButton: false,
      timer: tempo,
    });
  }

  erro(titulo: string, tempo?:number) {
    Swal({
      title: titulo,
      type: 'error',
      showConfirmButton: false,
      timer: tempo,
    });
  }
}
