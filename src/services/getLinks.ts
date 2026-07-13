import { prisma } from "@/lib/prisma";
import { LinkItem, Links } from "@/generated/prisma/client";

export async function getLinks(section: string): Promise<(Links & { items: LinkItem[] })[]> {
  return prisma.links.findMany({
    where: { section },
    include: { items: true },
    orderBy: { id: "asc" },
  });
}
