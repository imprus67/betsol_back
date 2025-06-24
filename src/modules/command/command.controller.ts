import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommandService } from './command.service';
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';

@Controller('commands')
export class CommandController {
  constructor(private readonly commandService: CommandService) { }

  @Get()
  findAll() {
    return this.commandService.findAllCommands();
  }

  @Post()
  create(@Body() createCommandDto: CreateCommandDto) {
    return this.commandService.createCommand(createCommandDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commandService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommandDto: UpdateCommandDto) {
    return this.commandService.update(+id, updateCommandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commandService.remove(+id);
  }
}
