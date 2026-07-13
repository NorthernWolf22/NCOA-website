import { prisma } from "@/lib/prisma";
import { BlocksItem } from "@/generated/prisma/client";

export async function getBlocksItem(slug: string) : Promise<BlocksItem | null> {
  return prisma.blocksItem.findUnique({
    where: { slug }
  });
}