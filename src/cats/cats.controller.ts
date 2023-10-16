import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  Header,
  BadRequestException,
  Redirect,
  Param,
} from '@nestjs/common';
import { CreateCat } from './dtos/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Cats } from './entities/cats.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';


@Controller('cats')
export class CatsController {
  @InjectRepository(Cats)
  constructor(private catService: CatsService,
    private readonly catsREpository: Repository<Cats>
    
    ) {}

  @Get()
  //   @HttpCode(220) //we can give custom status code to particular request
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Post()
  @Header('Cache-control', 'none')
  createNew(@Body() createCat: CreateCat) {
    return this.catService.create(createCat);
  }

  //   wild card route
  @Get('xy*xy')
  wildCardRouter() {
    return 'wild card router is this';
  }

  //   redirect router
  @Post('redirect')
  @Redirect('https://www.youtube.com/', 301)
  redirectRoute() {}

  //   using parameters to recieve what has been to params at time of making request
  @Get(':id')
  findOneWithId(@Param() params: any) {
    console.log(params.id);
    return `this will return ${params.id} id`;
  }
}
