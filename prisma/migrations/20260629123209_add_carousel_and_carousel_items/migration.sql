-- CreateTable
CREATE TABLE "Carousel" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "HeadingLight" TEXT NOT NULL,

    CONSTRAINT "Carousel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarouselItems" (
    "id" SERIAL NOT NULL,
    "carouselImage" TEXT NOT NULL,
    "carouselImageAlt" TEXT NOT NULL,
    "carouselTitle" TEXT NOT NULL,
    "carouselSubTitle" TEXT NOT NULL,
    "carouselOrder" INTEGER NOT NULL,
    "carouselId" INTEGER NOT NULL,

    CONSTRAINT "CarouselItems_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carousel_slug_key" ON "Carousel"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CarouselItems_carouselId_carouselOrder_key" ON "CarouselItems"("carouselId", "carouselOrder");

-- AddForeignKey
ALTER TABLE "CarouselItems" ADD CONSTRAINT "CarouselItems_carouselId_fkey" FOREIGN KEY ("carouselId") REFERENCES "Carousel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
