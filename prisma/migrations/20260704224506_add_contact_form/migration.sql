-- CreateEnum
CREATE TYPE "EnquiryType" AS ENUM ('GENERAL_ENQUIRY', 'ONE_TO_ONE_COACHING', 'BEGINNERS_COURSE');

-- AlterTable
ALTER TABLE "ContactForm" ADD COLUMN     "enquiryType" "EnquiryType",
ADD COLUMN     "message" TEXT;
