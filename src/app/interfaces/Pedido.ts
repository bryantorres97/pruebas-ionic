/* eslint-disable @typescript-eslint/naming-convention */
export interface Pedido {
  id_cliente: number;
  nombre_cliente: string;
  direccion_cliente: string;
  fecha_envio: Date;
  remitente: string;
  productos: any[];
}
