-- CreateTable
CREATE TABLE "BlocksItem" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "blockHeading" TEXT NOT NULL,
    "blockHeadingLight" TEXT NOT NULL,
    "blockText" TEXT NOT NULL,
    "blockImagePrimary" TEXT NOT NULL,
    "blockImagePrimaryAlt" TEXT NOT NULL,
    "blockImageSecondary" TEXT NOT NULL,
    "blockImageSecondaryAlt" TEXT NOT NULL,
    "blockImageTertiary" TEXT NOT NULL,
    "blockImageTertiaryAlt" TEXT NOT NULL,
    "blockButtonUrl" TEXT,
    "blockButtonLabel" TEXT,

    CONSTRAINT "BlocksItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BlocksItem_slug_key" ON "BlocksItem"("slug");
