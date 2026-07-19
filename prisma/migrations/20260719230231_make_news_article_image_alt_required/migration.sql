/*
  Warnings:

  - Made the column `articleImageAlt` on table `NewsArticle` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "NewsArticle" ALTER COLUMN "articleImageAlt" SET NOT NULL;
