import { Body, Controller, Delete, Get, Patch, Post, Param } from '@nestjs/common';
//import { Pedido } from 'src/dtos/Pedido/pedido';
import { Pedido as ModelPedido } from 'generated/prisma';
import { PedidoService } from './pedido.service';

@Controller('pedido')
export class PedidoController {

    constructor(
        private pedidoService: PedidoService
    ) {}

    @Get()
    async getPedidos() : Promise<ModelPedido[]> {
        return this.pedidoService.listarPedidos();
    }
    
    @Get(':id')
    async getPedidoById(@Param('id') idPedido: Number): Promise<ModelPedido>  {
        return this.pedidoService.encontrarPedido(idPedido);
    }
    
    @Get(':id/pratos')
    async getPratosPedidoById(@Param('id') idPedido: Number): Promise<any>  {
        return this.pedidoService.encontrarPratosPedido(idPedido);
    }

    @Post()
    async postPedido(@Body() body: ModelPedido) : Promise<ModelPedido> {
        return this.pedidoService.criarPedido(body);
    }

    @Delete(':id')
    async deletePedido(@Param('id') idPedido: Number) {
       return this.pedidoService.excluirPedido(idPedido);
    }
}