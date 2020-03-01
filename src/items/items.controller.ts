import { Controller, 
  Get,
  Post, 
  Body,
  UsePipes, 
  UseGuards
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.interface'
import {CreateItemDto} from './create-item.dto'
import {ValidationPipe} from '../common/items.pipe'
import { AdminGuard } from '../common/admin.guard';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

      @Get()
      async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
      }

    @Post()
    @UseGuards(new AdminGuard())
    @UsePipes(new ValidationPipe())
    async create(@Body() createItemDto: CreateItemDto) {
        this.itemsService.create(createItemDto)
    }
}