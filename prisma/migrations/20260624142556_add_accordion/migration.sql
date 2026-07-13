-- CreateTable
CREATE TABLE "Accordion" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Accordion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccordionItem" (
    "id" SERIAL NOT NULL,
    "accordionlabel" TEXT NOT NULL,
    "accordionContent" TEXT NOT NULL,
    "accordionOrder" INTEGER NOT NULL,
    "accordionId" INTEGER NOT NULL,

    CONSTRAINT "AccordionItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Accordion_slug_key" ON "Accordion"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "AccordionItem_accordionId_accordionOrder_key" ON "AccordionItem"("accordionId", "accordionOrder");

-- AddForeignKey
ALTER TABLE "AccordionItem" ADD CONSTRAINT "AccordionItem_accordionId_fkey" FOREIGN KEY ("accordionId") REFERENCES "Accordion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
