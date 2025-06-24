import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './modules/game/game.module';
import { EventModule } from './modules/event/event.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { CommandModule } from './modules/command/command.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, EventModule, GameModule, CommandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
