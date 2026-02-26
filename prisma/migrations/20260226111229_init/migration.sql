-- CreateEnum
CREATE TYPE "IdDocType" AS ENUM ('IDCard', 'BirthCertificate');

-- CreateEnum
CREATE TYPE "LeaderRole" AS ENUM ('coach', 'manager', 'delegate', 'team_lead', 'coach_trainer', 'teacher_assistant');

-- CreateEnum
CREATE TYPE "MedalType" AS ENUM ('gold', 'silver', 'bronze');

-- CreateTable
CREATE TABLE "Users" (
    "userID" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userLevel" INTEGER NOT NULL DEFAULT 0,
    "photoPath" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Enroll" (
    "id" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "idDocType" "IdDocType" NOT NULL,
    "address" TEXT,
    "photoPath" TEXT,
    "DocumentsPath" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Enroll_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Athletes" (
    "id" SERIAL NOT NULL,
    "enrollID" INTEGER NOT NULL,
    "class" TEXT,
    "uniformSize" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Athletes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leaders" (
    "id" SERIAL NOT NULL,
    "enrollID" INTEGER NOT NULL,
    "roles" "LeaderRole" NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Leaders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Province" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "khmerName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Events" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sports" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "events_id" INTEGER NOT NULL,
    "sportsID" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sports_event_org" (
    "id" SERIAL NOT NULL,
    "events_id" INTEGER NOT NULL,
    "sports_id" INTEGER NOT NULL,
    "organization_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sports_event_org_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AthleteParticipat" (
    "id" SERIAL NOT NULL,
    "athletesID" INTEGER NOT NULL,
    "eventsID" INTEGER NOT NULL,
    "categoriesID" INTEGER NOT NULL,
    "sportsID" INTEGER NOT NULL,
    "organizationID" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AthleteParticipat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaderParticipat" (
    "id" SERIAL NOT NULL,
    "leadersID" INTEGER NOT NULL,
    "eventsID" INTEGER NOT NULL,
    "sportsID" INTEGER NOT NULL,
    "organizationID" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LeaderParticipat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medals" (
    "id" SERIAL NOT NULL,
    "athletesParticipID" INTEGER NOT NULL,
    "medals_type" "MedalType" NOT NULL,
    "key_performance" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Medals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Athletes_enrollID_key" ON "Athletes"("enrollID");

-- CreateIndex
CREATE UNIQUE INDEX "Leaders_enrollID_key" ON "Leaders"("enrollID");

-- CreateIndex
CREATE UNIQUE INDEX "Leaders_phoneNumber_key" ON "Leaders"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Province_name_key" ON "Province"("name");

-- AddForeignKey
ALTER TABLE "Enroll" ADD CONSTRAINT "Enroll_userID_fkey" FOREIGN KEY ("userID") REFERENCES "Users"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Athletes" ADD CONSTRAINT "Athletes_enrollID_fkey" FOREIGN KEY ("enrollID") REFERENCES "Enroll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leaders" ADD CONSTRAINT "Leaders_enrollID_fkey" FOREIGN KEY ("enrollID") REFERENCES "Enroll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_events_id_fkey" FOREIGN KEY ("events_id") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_sportsID_fkey" FOREIGN KEY ("sportsID") REFERENCES "Sports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sports_event_org" ADD CONSTRAINT "Sports_event_org_events_id_fkey" FOREIGN KEY ("events_id") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sports_event_org" ADD CONSTRAINT "Sports_event_org_sports_id_fkey" FOREIGN KEY ("sports_id") REFERENCES "Sports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sports_event_org" ADD CONSTRAINT "Sports_event_org_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AthleteParticipat" ADD CONSTRAINT "AthleteParticipat_athletesID_fkey" FOREIGN KEY ("athletesID") REFERENCES "Athletes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AthleteParticipat" ADD CONSTRAINT "AthleteParticipat_eventsID_fkey" FOREIGN KEY ("eventsID") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AthleteParticipat" ADD CONSTRAINT "AthleteParticipat_categoriesID_fkey" FOREIGN KEY ("categoriesID") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AthleteParticipat" ADD CONSTRAINT "AthleteParticipat_sportsID_fkey" FOREIGN KEY ("sportsID") REFERENCES "Sports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AthleteParticipat" ADD CONSTRAINT "AthleteParticipat_organizationID_fkey" FOREIGN KEY ("organizationID") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaderParticipat" ADD CONSTRAINT "LeaderParticipat_leadersID_fkey" FOREIGN KEY ("leadersID") REFERENCES "Leaders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaderParticipat" ADD CONSTRAINT "LeaderParticipat_eventsID_fkey" FOREIGN KEY ("eventsID") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaderParticipat" ADD CONSTRAINT "LeaderParticipat_sportsID_fkey" FOREIGN KEY ("sportsID") REFERENCES "Sports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaderParticipat" ADD CONSTRAINT "LeaderParticipat_organizationID_fkey" FOREIGN KEY ("organizationID") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medals" ADD CONSTRAINT "Medals_athletesParticipID_fkey" FOREIGN KEY ("athletesParticipID") REFERENCES "AthleteParticipat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
