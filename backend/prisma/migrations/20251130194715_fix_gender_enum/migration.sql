/*
  Warnings:

  - The values [M,F] on the enum `Patient_gender` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Patient` MODIFY `gender` ENUM('Male', 'Female', 'Other') NOT NULL;
