import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { Cardapio as ModeloCardapio} from "generated/prisma";

@Injectable()
export class CardapioService {

    constructor(private prisma: PrismaService){}

    async criarCardapio(dados: ModeloCardapio){
        return this.prisma.cardapio.create({data: dados});
    }
    
    async listarCardapios(){
        return this.prisma.cardapio.findMany();
    }
    
    async encontrarCardapio(id: Number) {
        const resultCardapio = await this.prisma.cardapio.findUnique({
            where: {
                id: Number(id)
            }
        });

        if(!resultCardapio) {
            throw new NotFoundException(`O cardapio de ID ${id} não foi encontrado`);
        }

        return resultCardapio;

    }
    
    async encontrarPratosCardapio(id: Number) {
        const resultCardapio = await this.prisma.cardapio.findUnique({
            where: {
                id: Number(id)
            }
        }).pratos();

        if(!resultCardapio) {
            throw new NotFoundException(`O cardapio de ID ${id} não foi encontrado`);
        }

        return resultCardapio;

    }
    
    async atualizarCardapio(id: Number, dados: {nome?: string}) {
        return this.prisma.cardapio.update({
            where: {id: Number(id)},
            data: dados
        });
    }
    
    async excluirCardapio(id: Number){
        return this.prisma.cardapio.delete({
            where: {id: Number(id)}
        });
    }
}