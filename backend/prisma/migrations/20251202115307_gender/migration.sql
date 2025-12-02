/*
  Warnings:

  - The values [Male,Female,Other] on the enum `Patient_gender` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Patient` ADD COLUMN `bloodGroup` VARCHAR(191) NULL,
    ADD COLUMN `height` INTEGER NULL,
    ADD COLUMN `weight` INTEGER NULL,
    MODIFY `gender` ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL;
