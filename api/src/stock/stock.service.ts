import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // Importe InjectRepository
import { Repository } from 'typeorm'; // Importe Repository
import { Stock } from '../entity/stock.entity'; // Importe a entidade Stock do TypeORM

// Você pode criar DTOs para isso, mas para manter a simplicidade, vamos usar interfaces/any por enquanto.
// Recomenda-se criar DTOs para melhor validação e tipagem.
interface CreateStockDto {
  nameProduct: string;
  quantity: number;
  unitPrice: number;
}

interface UpdateStockDto {
  nameProduct?: string;
  quantity?: number;
  unitPrice?: number;
}

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock) // Injetar o repositório do TypeORM
    private stockRepository: Repository<Stock>,
  ) {}

  async create(data: CreateStockDto): Promise<Stock> {
    const newStock = this.stockRepository.create(data);
    return this.stockRepository.save(newStock);
  }

  async findAll(): Promise<Stock[]> {
    return this.stockRepository.find();
  }

  async findOne(id: number): Promise<Stock> {
    const stock = await this.stockRepository.findOne({ where: { id } });
    if (!stock) {
      throw new NotFoundException(`Item de estoque com ID ${id} não encontrado.`);
    }
    return stock;
  }

  async update(id: number, data: UpdateStockDto): Promise<Stock> {
    const stockToUpdate = await this.stockRepository.findOne({ where: { id } });

    if (!stockToUpdate) {
      throw new NotFoundException(`Item de estoque com ID ${id} não encontrado.`);
    }

    this.stockRepository.merge(stockToUpdate, data);
    return this.stockRepository.save(stockToUpdate);
  }

  async remove(id: number): Promise<void> {
    const result = await this.stockRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Item de estoque com ID ${id} não encontrado.`);
    }
  }
}