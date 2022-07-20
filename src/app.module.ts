import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    UserModule,
    PostModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: true,
      dropSchema: false,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
