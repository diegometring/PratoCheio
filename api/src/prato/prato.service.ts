import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { Prato as ModeloPrato} from "generated/prisma";

@Injectable()
export class PratoService {

    constructor(private prisma: PrismaService){}

    async criarPrato(dados: ModeloPrato){
        return this.prisma.prato.create({data: dados});
    }
    
    async listarPratos(){
        return this.prisma.prato.findMany();
    }
    
    async encontrarPrato(id: Number) {
        const resultPrato = await this.prisma.prato.findUnique({
            where: {
                id: Number(id)
            }
        });

        if(!resultPrato) {
            throw new NotFoundException(`O prato de ID ${id} não foi encontrado`);
        }

        return resultPrato;

    }
    
    async atualizarPrato(id: Number, dados: {
        name?: string,
        price?: number,
        image?: string,
        description?: string,
        category?: string,
        available?: boolean    
    }) {
        return this.prisma.prato.update({
            where: {id: Number(id)},
            data: dados
        });
    }
    
    async excluirPrato(id: Number){
        return this.prisma.prato.delete({
            where: {id: Number(id)}
        });
    }
}