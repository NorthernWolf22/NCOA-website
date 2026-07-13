import { NewsArticle } from "@/generated/prisma/client";
import { prisma } from "../lib/prisma";

export async function getNewsArticles(): Promise<NewsArticle[]> {
    return prisma.newsArticle.findMany({
        orderBy: { id: "asc" }
    });
}

export async function getNewsArticle(id: number) {
    return prisma.newsArticle.findUnique({
        where: { id }
    })
}