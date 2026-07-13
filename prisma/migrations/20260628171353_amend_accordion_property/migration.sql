/*
  Warnings:

  - Made the column `titleLight` on table `Accordion` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Accordion" ALTER COLUMN "titleLight" SET NOT NULL;
