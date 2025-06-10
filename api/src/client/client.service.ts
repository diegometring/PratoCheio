import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // Importe InjectRepository
import { Repository } from 'typeorm'; // Importe Repository
import * as bcrypt from 'bcrypt';
import { Client } from '../entity/client.entity'; // Importe a entidade Client do TypeORM

// Você pode criar DTOs para isso, mas para manter a simplicidade da migração, vamos usar interfaces
interface ClientCreateData {
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
}

interface ClientUpdateData {
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
}

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) // Injetar o repositório do TypeORM
    private clientRepository: Repository<Client>,
  ) {}

  /**
   * Faz o hash de uma senha em texto simples usando bcrypt.
   * @param password A senha em texto simples para fazer o hash.
   * @returns A string da senha com hash.
   */
  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  /**
   * Exclui o campo de senha de um objeto Client.
   * Isso é útil para retornar dados do cliente sem informações sensíveis.
   * @param client O objeto cliente.
   * @returns O objeto cliente sem o campo de senha.
   */
  private excludePassword(client: Client) {
    // Desestrutura a senha e retorna o restante das propriedades.
    const { password, ...result } = client;
    return result;
  }

  /**
   * Cria um novo cliente no banco de dados.
   * Faz o hash da senha antes de armazená-la.
   * Lança ConflictException se um e-mail já existir.
   * @param data Os dados para criar o cliente (nome, email, senha, phoneNumber).
   * @returns O cliente recém-criado, com a senha excluída.
   */
  async create(data: ClientCreateData) {
    // Verifica se um cliente com o e-mail fornecido já existe.
    const exists = await this.clientRepository.findOne({ where: { email: data.email } });
    if (exists) {
      throw new ConflictException('Email já cadastrado');
    }

    // Faz o hash da senha fornecida antes de salvar.
    const hashedPassword = await this.hashPassword(data.password);

    // Cria o cliente no banco de dados.
    const newClient = this.clientRepository.create({
      ...data,
      password: hashedPassword,
    });
    const savedClient = await this.clientRepository.save(newClient);

    // Retorna o usuário criado com a senha excluída.
    return this.excludePassword(savedClient);
  }

  /**
   * Valida as credenciais do usuário para login.
   * Compara a senha fornecida com a senha hash armazenada.
   * Lança UnauthorizedException se as credenciais forem inválidas.
   * @param email O e-mail do cliente.
   * @param password A senha em texto simples do cliente.
   * @returns O cliente validado, com a senha excluída.
   */
  async validateUser(email: string, password: string) {
    // Encontra o usuário por e-mail.
    const user = await this.clientRepository.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Compara a senha fornecida com a senha hash no banco de dados.
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Retorna o usuário validado com a senha excluída.
    return this.excludePassword(user);
  }

  /**
   * Recupera todos os clientes do banco de dados.
   * @returns Um array de todos os clientes, com as senhas excluídas.
   */
  async findAll() {
    const users = await this.clientRepository.find();
    // Mapeia os usuários para excluir as senhas de cada um.
    return users.map((user) => this.excludePassword(user));
  }

  /**
   * Recupera um único cliente pelo seu ID.
   * @param id O ID do cliente a ser recuperado.
   * @returns O cliente encontrado, com a senha excluída, ou null se não encontrado.
   */
  async findOne(id: number) {
    const user = await this.clientRepository.findOne({ where: { id } });
    // Retorna o usuário com a senha excluída, ou null se nenhum usuário for encontrado.
    return user ? this.excludePassword(user) : null;
  }

  /**
   * Recupera um único cliente pelo seu endereço de e-mail.
   * @param email O e-mail do cliente a ser recuperado.
   * @returns O cliente encontrado, com a senha excluída, ou null se não encontrado.
   */
  async findByEmail(email: string) {
    const user = await this.clientRepository.findOne({ where: { email } });
    // Retorna o usuário com a senha excluída, ou null se nenhum usuário for encontrado.
    return user ? this.excludePassword(user) : null;
  }

  /**
   * Atualiza um cliente existente.
   * Faz o hash da nova senha, se fornecida.
   * @param id O ID do cliente a ser atualizado.
   * @param data Os dados parciais para atualização (ex: nome, email, telefone, senha).
   * @returns O cliente atualizado, com a senha excluída.
   */
  async update(id: number, data: ClientUpdateData) {
    const clientToUpdate = await this.clientRepository.findOne({ where: { id } });

    if (!clientToUpdate) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }

    // Se uma nova senha for fornecida nos dados de atualização, faz o hash.
    if (data.password && typeof data.password === 'string') {
      data.password = await this.hashPassword(data.password);
    }

    // Aplica as atualizações e salva
    this.clientRepository.merge(clientToUpdate, data);
    const updatedClient = await this.clientRepository.save(clientToUpdate);

    // Retorna o usuário atualizado com a senha excluída.
    return this.excludePassword(updatedClient);
  }

  /**
   * Remove um cliente do banco de dados.
   * @param id O ID do cliente a ser removido.
   * @returns O cliente removido, com a senha excluída.
   * @throws NotFoundException se o cliente a ser removido não existir.
   */
  async remove(id: number) {
    const clientToRemove = await this.clientRepository.findOne({ where: { id } });

    if (!clientToRemove) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }

    const removedClient = await this.clientRepository.remove(clientToRemove);
    return this.excludePassword(removedClient);
  }
}