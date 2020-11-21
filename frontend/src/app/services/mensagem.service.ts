import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class MensagemService {

  constructor() { }

  simple(titulo: string, tipo: any, tempo: number) {
    Swal({
      title: titulo,
      type: tipo,
      showConfirmButton: false,
      timer: tempo,
    });
  }

  // erro(titulo: string, tempo?: number, tipo?: any) {
  //   Swal({
  //     title: titulo,
  //     type: tipo,
  //     showConfirmButton: false,
  //     timer: tempo,
  //   });
  // }
}

export enum SweetAlertType {
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info',
  question = 'question'
}
