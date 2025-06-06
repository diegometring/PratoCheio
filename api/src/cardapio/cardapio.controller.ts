import { Body, Controller, Delete, Get, Patch, Post, Param } from '@nestjs/common';
//import { Cardapio } from 'src/dtos/Cardapio/cardapio';
import { Cardapio as ModelCardapio } from 'generated/prisma';
import { CardapioService } from './cardapio.service';

@Controller('cardapio')
export class CardapioController {

    constructor(
        private cardapioService: CardapioService
    ) {}

    @Get()
    async getCardapios() : Promise<ModelCardapio[]> {
        return this.cardapioService.listarCardapios();
    }
    
    @Get(':id')
    async getCardapioById(@Param('id') idCardapio: Number): Promise<ModelCardapio>  {
        return this.cardapioService.encontrarCardapio(idCardapio);
    }
    
    @Get(':id/pratos')
    async getPratosCardapioById(@Param('id') idCardapio: Number): Promise<any>  {
        return this.cardapioService.encontrarPratosCardapio(idCardapio);
    }

    @Post()
    async postCardapio(@Body() body: ModelCardapio) : Promise<ModelCardapio> {
        return this.cardapioService.criarCardapio(body);
    }

    @Patch(':id')
    async updateCardapio(@Param('id') idCardapio: Number, @Body() dados: {nome?: string}) : Promise<ModelCardapio> {
        return this.cardapioService.atualizarCardapio(idCardapio, dados);
    }

    @Delete(':id')
    async deleteCardapio(@Param('id') idCardapio: Number) {
       return this.cardapioService.excluirCardapio(idCardapio);
    }
}