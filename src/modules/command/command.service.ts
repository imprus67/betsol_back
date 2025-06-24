import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';

@Injectable()
export class CommandService {
  public constructor(private readonly prismaService: PrismaService) { }

  async createCommand(createCommandDto: CreateCommandDto) {
    // const { name, logo, gameNameId } = createCommandDto;
    const command = await this.prismaService.commands.create({
      data: {
        name: createCommandDto.name,
        logo: createCommandDto.logo,
        gameNameId: createCommandDto.gameNameId
      }
    })
    return command;
  }

  findAllCommands() {
    return this.prismaService.commands.findMany({
      include: {
        gameName: true
      }
    })
  }

  findOne(id: number) {
    return this.prismaService.commands.findFirst({
      where: {

      }
    })
  }

  update(id: number, updateCommandDto: UpdateCommandDto) {
    return `This action updates a #${id} command`;
  }

  remove(id: number) {
    return `This action removes a #${id} command`;
  }
}
