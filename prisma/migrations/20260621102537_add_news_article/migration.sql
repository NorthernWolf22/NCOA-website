-- CreateEnum
CREATE TYPE "ArticleCategory" AS ENUM ('STORIES', 'EVENTS', 'LEARN', 'COURSES');

-- CreateTable
CREATE TABLE "NewsArticle" (
    "id" SERIAL NOT NULL,
    "articleTitle" TEXT NOT NULL,
    "articleText" TEXT NOT NULL,
    "articleImage" TEXT NOT NULL,
    "articleCreateDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "articleAuthor" TEXT NOT NULL,
    "articleCategory" "ArticleCategory" NOT NULL,

    CONSTRAINT "NewsArticle_pkey" PRIMARY KEY ("id")
);
