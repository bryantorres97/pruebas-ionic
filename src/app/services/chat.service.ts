import { Injectable } from '@angular/core';
import { Pedido } from '../interfaces/Pedido';
import { WebsocketServiceService } from './websocket-service.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(public wsService: WebsocketServiceService) {}

  sendMessage(remitente: string, destinatario: string, mensaje: string) {
    const payload = {
      remitente,
      destinatario,
      mensaje,
    };

    this.wsService.emit('mensaje', payload);
  }

  sendPedido(pedido: Pedido) {
    this.wsService.emit('pedido', pedido);
  }

  getMessages() {
    return this.wsService.listen('mensaje-nuevo');
  }
}
