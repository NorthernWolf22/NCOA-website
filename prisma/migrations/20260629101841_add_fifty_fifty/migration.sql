-- CreateTable
CREATE TABLE "FiftyFifty" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "fiftyHeading" TEXT NOT NULL,
    "fiftyHeadingLight" TEXT NOT NULL,
    "fiftyText" TEXT NOT NULL,
    "fiftyImagePrimary" TEXT NOT NULL,
    "fiftyImagePrimaryAlt" TEXT NOT NULL,
    "fiftyImageSecondary" TEXT,
    "fiftyImageSecondaryAlt" TEXT,
    "fiftyButtonUrl" TEXT,
    "fiftyButtonLabel" TEXT,

    CONSTRAINT "FiftyFifty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FiftyFifty_slug_key" ON "FiftyFifty"("slug");
