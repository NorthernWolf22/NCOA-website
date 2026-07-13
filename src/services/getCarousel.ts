import { prisma } from "@/lib/prisma";
import { Carousel, CarouselItems } from "@/generated/prisma/client";

export async function getCarousel(slug: string) : Promise<(Carousel & { items: CarouselItems[] }) | null> {
  return prisma.carousel.findUnique({
    where: { slug },
    include: { items: true },
  });
}