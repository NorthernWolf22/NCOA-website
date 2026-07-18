import { prisma } from "@/lib/prisma";
import { FiftyFifty } from "@/generated/prisma/client";

export async function getFiftyFifty(slug: string) : Promise<FiftyFifty | null> {
  return prisma.fiftyFifty.findUnique({
    where: { slug }
  });
}
