import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cats } from './entities/cats.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
/*
by this we can make this module globally accesable across repo
but its not good practice to make every module global , use of imports array is good normally
*/
@Module({
  // imports: [TypeOrmModule.forFeature([Cats])],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
