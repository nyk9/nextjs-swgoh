/*
  Warnings:

  - You are about to drop the `Counter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Counter";

-- CreateTable
CREATE TABLE "counter" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "allied_leader" TEXT NOT NULL,
    "allied_characters" TEXT NOT NULL,
    "enemy_leader" TEXT NOT NULL,
    "enemy_characters" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "counter_pkey" PRIMARY KEY ("id")
);
