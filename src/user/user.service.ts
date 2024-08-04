import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(tenant: string) {
    console.log(`This action returns a #${tenant} user`);
    await this.prisma.setSchema(tenant);
    console.log('set schema to ', tenant);
    // this.prisma.$executeRaw`-- CreateTable
    // CREATE TABLE ${tenant}."User" (
    //     "id" SERIAL NOT NULL,
    //     "name" TEXT NOT NULL,
    //     "email" TEXT NOT NULL,

    //     CONSTRAINT "User_pkey" PRIMARY KEY ("id")
    // );
    // `;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
