-- CreateTable
CREATE TABLE "Links" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "columnTitle" TEXT,
    "columnTitleLink" BOOLEAN,
    "columnTitleUrl" TEXT,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkItem" (
    "id" SERIAL NOT NULL,
    "linkLabel" TEXT NOT NULL,
    "linkUrl" TEXT NOT NULL,
    "linkOrder" INTEGER NOT NULL,
    "linkId" INTEGER NOT NULL,

    CONSTRAINT "LinkItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LinkItem" ADD CONSTRAINT "LinkItem_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Links"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
