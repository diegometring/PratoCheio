import { Body, Controller, Delete, Get, Patch, Post, Param } from '@nestjs/common';
//import { Prato } from 'src/dtos/Prato/prato';
import { Prato as ModelPrato } from 'generated/prisma';
import { PratoService } from './prato.service';

@Controller('prato')
export class PratoController {

    constructor(
        private pratoService: PratoService
    ) {}

    @Get()
    async getPratos() : Promise<ModelPrato[]> {
        return this.pratoService.listarPratos();
    }
    
    @Get(':id')
    async getPratoById(@Param('id') idPrato: Number): Promise<ModelPrato>  {
        return this.pratoService.encontrarPrato(idPrato);
    }

    @Post()
    async postPrato(@Body() body: ModelPrato) : Promise<ModelPrato> {
        return this.pratoService.criarPrato(body);
    }

    @Patch(':id')
    async updatePrato(@Param('id') idPrato: Number, @Body() dados: {
        name?: string,
        price?: number,
        image?: string,
        description?: string,
        category?: string,
        available?: boolean
    }) : Promise<ModelPrato> {
        return this.pratoService.atualizarPrato(idPrato, dados);
    }

    @Delete(':id')
    async deletePrato(@Param('id') idPrato: Number) {
       return this.pratoService.excluirPrato(idPrato);
    }
}