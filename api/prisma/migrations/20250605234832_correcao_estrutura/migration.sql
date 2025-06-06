/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `Cardapio` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Pedido_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cardapio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Cardapio" ("id", "nome") SELECT "id", "nome" FROM "Cardapio";
DROP TABLE "Cardapio";
ALTER TABLE "new_Cardapio" RENAME TO "Cardapio";
CREATE TABLE "new_Prato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "category" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL,
    "cardapioId" INTEGER NOT NULL,
    "pedidoId" INTEGER,
    CONSTRAINT "Prato_cardapioId_fkey" FOREIGN KEY ("cardapioId") REFERENCES "Cardapio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Prato_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Prato" ("available", "cardapioId", "category", "description", "id", "image", "name", "price") SELECT "available", "cardapioId", "category", "description", "id", "image", "name", "price" FROM "Prato";
DROP TABLE "Prato";
ALTER TABLE "new_Prato" RENAME TO "Prato";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
