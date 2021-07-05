/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Mensaje } from '../interfaces/Mensaje';
import { Pedido } from '../interfaces/Pedido';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit, OnDestroy {
  texto: string;
  nombre: string;
  mensajes$: Subscription = new Subscription();
  mensajes: any[] = [];
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.mensajes$ = this.chatService
      .getMessages()
      .subscribe((msg: Mensaje) => {
        if (msg.destinatario === this.nombre || msg.remitente === this.nombre) {
          console.log(this.mensajes);
          this.mensajes.push(msg);
        }
        // setTimeout(() => {
        //   this.elemento.scrollTop = this.elemento.scrollHeight;
        // }, 50);
      });
  }

  ngOnDestroy() {
    this.mensajes$.unsubscribe();
  }

  enviarMensaje() {
    // if (this.texto.trim() === '') return;
    this.chatService.sendMessage(this.nombre, 'Admin', this.texto);
    this.texto = '';
  }

  enviarPedido() {
    const pedido: Pedido = {
      id_cliente: 1,
      nombre_cliente: this.nombre,
      direccion_cliente: 'Ambato',
      fecha_envio: new Date(),
      remitente: 'Admin',
      productos: [
        {
          id_producto: 1,
          nombre_producto: 'Rufles',
        },
        {
          id_producto: 2,
          nombre_producto: 'Doritos',
        },
      ],
    };
    this.chatService.sendPedido(pedido);
  }
}
