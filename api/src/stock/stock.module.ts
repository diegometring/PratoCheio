import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { Stock } from '../entity/stock.entity'; // Importe a entidade Stock

@Module({
  imports: [
    TypeOrmModule.forFeature([Stock]), // Essencial: disponibiliza o repositório de Stock
  ],
  controllers: [StockController],
  providers: [StockService],
  exports: [StockService, TypeOrmModule], // Exporte o serviço e o TypeOrmModule se outros módulos precisarem deles
})
export class StockModule {}