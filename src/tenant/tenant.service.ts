import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TenantService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createTenantDto: CreateTenantDto) {
    const tenant = await this.prisma.tenant.create({ data: createTenantDto });
    console.log(tenant);
    await this.prisma.setSchema(tenant.schemaName);
    await this.prisma.$executeRaw`CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);`;
    await this.prisma.resetSchema();
    return tenant;
  }

  findAll() {
    return `This action returns all tenant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tenant`;
  }

  update(id: number, updateTenantDto: UpdateTenantDto) {
    return `This action updates a #${id} tenant`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenant`;
  }
}
