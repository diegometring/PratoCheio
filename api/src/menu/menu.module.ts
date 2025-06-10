import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { Menu } from '../entity/menu.entity'; // Importe a entidade Menu

@Module({
  imports: [
    TypeOrmModule.forFeature([Menu]), // Essencial: disponibiliza o repositório de Menu
  ],
  controllers: [MenuController],
  providers: [MenuService],
  exports: [MenuService, TypeOrmModule], // Exporte o serviço e o TypeOrmModule se outros módulos precisarem deles
})
export class MenuModule {}