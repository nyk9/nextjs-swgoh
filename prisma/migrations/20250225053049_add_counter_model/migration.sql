-- CreateTable
CREATE TABLE "TWForm" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "TWForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Counter" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "allied_leader" TEXT NOT NULL,
    "allied_characters" TEXT NOT NULL,
    "enemy_leader" TEXT NOT NULL,
    "enemy_characters" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Counter_pkey" PRIMARY KEY ("id")
);
