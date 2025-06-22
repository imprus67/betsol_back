import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';

@Injectable()
export class GameService {
  public constructor(private readonly prismaService: PrismaService) {}

  async findAllGames() {
    return await this.prismaService.games.findMany();
  }

  async createGame(dto: CreateGameDto) {
    const { name, logo } = dto;
    const game = await this.prismaService.games.create({
      data: {
        name,
        logo,
      },
    });
    return game;
  }
}
