import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { ProjetoController } from './pedido/pedido.controller';
import { ProjetoService } from './pedido/pedido.service';
import { TarefaController } from './prato/prato.controller';
import { TarefaService } from './prato/prato.service';

@Module({
  imports: [],
  controllers: [AppController, UsuarioController, ProjetoController,TarefaController],
  providers: [AppService, PrismaService, UsuarioService, ProjetoService, TarefaService] 
})
export class AppModule {}
