import { Body, Controller, Delete, Get, Patch, Post, Param } from '@nestjs/common';
//import { Usuario } from 'src/dtos/Usuario/usuario';
import { Usuario as ModelUsuario } from 'generated/prisma';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

    constructor(
        private usuarioService: UsuarioService
    ) {}

    @Get()
    async getUsuarios() : Promise<ModelUsuario[]> {
        return this.usuarioService.listarUsuarios();
    }
    
    @Get(':id')
    async getUsuarioById(@Param('id') idUsuario: Number): Promise<ModelUsuario>  {
        return this.usuarioService.encontrarUsuario(idUsuario);
    }
    
    @Get('pedidos/:id')
    async getProjetosUsuarioById(@Param('id') idUsuario: Number): Promise<any>  {
        return this.usuarioService.encontrarProjetosUsuario(idUsuario);
    }

    @Post()
    async postUsuario(@Body() body: ModelUsuario) : Promise<ModelUsuario> {
        return this.usuarioService.criarUsuario(body);
    }

    @Patch(':id')
    async updateUsuario(@Param('id') idUsuario: Number, @Body() dados: {nome?: string, email?: string, senha?: string}) : Promise<ModelUsuario> {
        return this.usuarioService.atualizarUsuario(idUsuario, dados);
    }

    @Delete(':id')
    async deleteUsuario(@Param('id') idUsuario: Number) {
       return this.usuarioService.excluirUsuario(idUsuario);
    }
}