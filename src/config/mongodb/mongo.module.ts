import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: 'mongodb+srv://devCA:HD7cvBBzyaaL7sp@cluster0.mycjf.mongodb.net/TARJETA?retryWrites=true&w=majority',
      }),
      inject: [ConfigService],
    }),
  ],
})
export class Mongo {}
