-- CreateTable
CREATE TABLE "Filter" (
    "id" SERIAL NOT NULL,
    "regExp" TEXT,
    "Privacy" TEXT,
    "NonPrivacy" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Filter_pkey" PRIMARY KEY ("id")
);
