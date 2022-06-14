-- CreateTable
CREATE TABLE "WebFilter" (
    "id" SERIAL NOT NULL,
    "FstInstance" TEXT NOT NULL,
    "SndInstance" INTEGER NOT NULL,
    "TrdInstance" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WebFilter_pkey" PRIMARY KEY ("id")
);
