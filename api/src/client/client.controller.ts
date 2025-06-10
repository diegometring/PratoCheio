// src/client/client.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  /**
   * Lida com o registro de clientes.
   * @param data Os dados para o novo cliente (nome, email, senha, telefone opcional).
   * @returns O cliente criado, com a senha excluída.
   */
  @Post('register')
  async register(
    @Body()
    data: {
      name: string;
      email: string;
      password: string;
      phoneNumber?: string;
    },
  ) {
    // O serviço lidará com possíveis ConflictException (e-mail já em uso)
    return await this.clientService.create(data);
  }

  /**
   * Lida com o login de clientes.
   * @param body As credenciais de login (email e senha).
   * @returns O cliente autenticado, com a senha excluída.
   * @throws UnauthorizedException se as credenciais forem inválidas.
   */
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.clientService.validateUser(
      body.email,
      body.password,
    );
    // Embora o serviço já lance UnauthorizedException, mantido para clareza
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    return user;
  }

  /**
   * Encontra um cliente pelo seu endereço de e-mail.
   * @param email O e-mail do cliente a ser encontrado.
   * @returns O cliente encontrado, com a senha excluída, ou null se não encontrado.
   */
  @Get('find')
  findOneByEmail(@Query('email') email: string) {
    return this.clientService.findByEmail(email);
  }

  /**
   * Encontra um cliente pelo seu ID.
   * @param id O ID do cliente a ser encontrado.
   * @returns O cliente encontrado, com a senha excluída, ou null se não encontrado.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    // Converte o id para um número, como o Prisma espera um número para o ID
    return this.clientService.findOne(+id);
  }

  /**
   * Remove um cliente pelo seu ID.
   * @param id O ID do cliente a ser removido.
   * @returns O cliente removido, com a senha excluída.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    // Converte o id para um número, como o Prisma espera um número para o ID
    return this.clientService.remove(+id);
  }
}
