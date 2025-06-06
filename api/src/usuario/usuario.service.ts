import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { Usuario as ModeloUsuario} from "generated/prisma";

@Injectable()
export class UsuarioService {

    constructor(private prisma: PrismaService){}

    async criarUsuario(dados: ModeloUsuario){
        return this.prisma.usuario.create({data: dados});
    }
    
    async listarUsuarios(){
        return this.prisma.usuario.findMany();
    }
    
    async encontrarUsuario(id: Number) {
        const resultUsuario = await this.prisma.usuario.findUnique({
            where: {
                id: Number(id)
            }
        });

        if(!resultUsuario) {
            throw new NotFoundException(`O usuário de ID ${id} não foi encontrado`);
        }

        return resultUsuario;

    }

    async encontrarProjetosUsuario(id: Number) {
        const resultUsuario = await this.prisma.usuario.findUnique({
            where: {
                id: Number(id)
            }
        }).projetos();

        if(!resultUsuario) {
            throw new NotFoundException(`O usuário de ID ${id} não foi encontrado`);
        }

        return resultUsuario;

    }
    
    async atualizarUsuario(id: Number, dados: {email?: string, senha?: string, nome?: string}) {
        return this.prisma.usuario.update({
            where: {id: Number(id)},
            data: dados
        });
    }
    
    async excluirUsuario(id: Number){
        return this.prisma.usuario.delete({
            where: {id: Number(id)}
        });
    }
}