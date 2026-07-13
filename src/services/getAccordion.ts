import { prisma } from "@/lib/prisma";
import { Accordion, AccordionItem } from "@/generated/prisma/client";

export async function getAccordion(slug: string) : Promise<(Accordion & { items: AccordionItem[] }) | null> {
  return prisma.accordion.findUnique({
    where: { slug },
    include: { items: true },
  });
}
