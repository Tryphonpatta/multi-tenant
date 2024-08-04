import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async setSchema(schema: string) {
    console.log(schema);
    await this.$executeRawUnsafe(`CREATE SCHEMA IF NOT EXISTS "${schema}";`);
    console.log('create schema');
    await this.$executeRawUnsafe(`SET search_path TO "${schema}", public;`);
  }

  async resetSchema() {
    await this.$executeRawUnsafe(`SET search_path TO public;`);
  }
}
