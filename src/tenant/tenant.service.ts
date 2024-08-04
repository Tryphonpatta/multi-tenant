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

    await this.prisma.$executeRaw`CREATE TABLE "courseUser" (
      "id" TEXT NOT NULL,
      "course_id" TEXT NOT NULL,
      "user_id" INTEGER NOT NULL,
  
      CONSTRAINT "courseUser_pkey" PRIMARY KEY ("id")
  );`;
    await this.prisma.$executeRaw`
      ALTER TABLE "courseUser" ADD CONSTRAINT "courseUser_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES public."Course"("id") ON DELETE CASCADE;`;
    await this.prisma
      .$executeRaw`ALTER TABLE "courseUser" ADD CONSTRAINT "courseUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES public."User"("id") ON DELETE CASCADE;`;

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
