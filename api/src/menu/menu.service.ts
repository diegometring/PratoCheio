import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // Importe InjectRepository
import { Repository } from 'typeorm'; // Importe Repository
import { Menu, Category } from '../entity/menu.entity'; // Importe a entidade Menu do TypeORM

// Você pode criar DTOs para isso, mas para manter a simplicidade, vamos usar interfaces/any por enquanto.
// Recomenda-se criar DTOs para melhor validação e tipagem.
interface CreateMenuDto {
  name: string;
  image: string;
  description: string;
  price: number;
  category: Category;
  available?: boolean;
}

interface UpdateMenuDto {
  name?: string;
  image?: string;
  description?: string;
  price?: number;
  category?: Category;
  available?: boolean;
}

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu) // Injetar o repositório do TypeORM
    private menuRepository: Repository<Menu>,
  ) {}

  async create(data: CreateMenuDto): Promise<Menu> {
    const newMenu = this.menuRepository.create({
      ...data,
      available: data.available ?? true, // Garante que 'available' seja true por padrão se não for fornecido
    });
    return this.menuRepository.save(newMenu);
  }

  async findAll(): Promise<Menu[]> {
    return this.menuRepository.find();
  }

  async findOne(id: number): Promise<Menu> {
    const menu = await this.menuRepository.findOne({ where: { id } });
    if (!menu) {
      throw new NotFoundException(`Menu com ID ${id} não encontrado.`);
    }
    return menu;
  }

  async update(id: number, data: UpdateMenuDto): Promise<Menu> {
    const menuToUpdate = await this.menuRepository.findOne({ where: { id } });

    if (!menuToUpdate) {
      throw new NotFoundException(`Menu com ID ${id} não encontrado.`);
    }

    this.menuRepository.merge(menuToUpdate, data);
    return this.menuRepository.save(menuToUpdate);
  }

  async remove(id: number): Promise<void> {
    const result = await this.menuRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Menu com ID ${id} não encontrado.`);
    }
  }
}