/*
  Warnings:

  - You are about to drop the `Filter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Filter";

-- CreateTable
CREATE TABLE "RegExp" (
    "id" SERIAL NOT NULL,
    "RegExp" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RegExp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Privacy" (
    "id" SERIAL NOT NULL,
    "Privacy" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Privacy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NonPrivacy" (
    "id" SERIAL NOT NULL,
    "NonPrivacy" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NonPrivacy_pkey" PRIMARY KEY ("id")
);
