import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async findAll() {
    return this.gameService.findAllGames();
  }

  @Post()
  async create(@Body() dto: CreateGameDto) {
    return this.gameService.createGame(dto);
  }
}
