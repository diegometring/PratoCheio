import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { Pedido as ModeloPedido} from "generated/prisma";

@Injectable()
export class PedidoService {

    constructor(private prisma: PrismaService){}

    async criarPedido(dados: ModeloPedido){
        return this.prisma.pedido.create({data: dados});
    }
    
    async listarPedidos(){
        return this.prisma.pedido.findMany();
    }
    
    async encontrarPedido(id: Number) {
        const resultPedido = await this.prisma.pedido.findUnique({
            where: {
                id: Number(id)
            }
        });

        if(!resultPedido) {
            throw new NotFoundException(`O pedido de ID ${id} não foi encontrado`);
        }

        return resultPedido;

    }
    
    async encontrarPratosPedido(id: Number) {
        const resultPedido = await this.prisma.pedido.findUnique({
            where: {
                id: Number(id)
            }
        }).pratos();

        if(!resultPedido) {
            throw new NotFoundException(`O pedido de ID ${id} não foi encontrado`);
        }

        return resultPedido;

    }
    
    async excluirPedido(id: Number){
        return this.prisma.pedido.delete({
            where: {id: Number(id)}
        });
    }
}