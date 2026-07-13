/*
  Warnings:

  - You are about to drop the column `HeadingLight` on the `Carousel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Carousel" DROP COLUMN "HeadingLight",
ADD COLUMN     "headingLight" TEXT;

-- CreateTable
CREATE TABLE "Nav" (
    "id" SERIAL NOT NULL,
    "navTitle" TEXT NOT NULL,
    "navUrl" TEXT NOT NULL,

    CONSTRAINT "Nav_pkey" PRIMARY KEY ("id")
);
