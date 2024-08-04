/*
  Warnings:

  - You are about to drop the `tenant` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "category" TEXT NOT NULL;

-- DropTable
DROP TABLE "tenant";

-- CreateTable
CREATE TABLE "Tenant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "schemaName" TEXT NOT NULL,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);
