/*
  Warnings:

  - Made the column `blockButtonUrl` on table `BlocksItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `blockButtonLabel` on table `BlocksItem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BlocksItem" ALTER COLUMN "blockButtonUrl" SET NOT NULL,
ALTER COLUMN "blockButtonLabel" SET NOT NULL;

-- CreateTable
CREATE TABLE "ContactForm" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "ContactForm_pkey" PRIMARY KEY ("id")
);
