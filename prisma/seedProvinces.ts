import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const db = new PrismaClient({
  accelerateUrl: process.env.ACCELERATE_URL,
}).$extends(withAccelerate());

async function seedSports() {
  const sports = [
    'Football',
    'Basketball',
    'Volleyball',
    'Athletics',
    'Swimming',
    'Badminton',
    'Table Tennis',
    'Taekwondo',
    'Karate',
    'Judo',
    'Boxing',
    'Cycling',
    'Tennis',
    'Golf',
    'Wrestling',
    'Weightlifting',
    'Gymnastics',
    'Fencing',
    'Archery',
    'Rowing',
    'Sailing',
    'Shooting',
    'Softball',
    'Handball',
    'Hockey',
    'Rugby',
    'Squash',
    'Surfing',
    'Triathlon',
    'Water Polo',
    'Canoeing',
    'E-sports',
  ];

  // use createMany for sports as well
  await db.events.createMany({
    data: [{ name: 'Annual Sports Festival', date: new Date('2026-03-15') }],
    skipDuplicates: true,
  });
}

async function seedEvents() {
  await db.events.createMany({
    data: [{ name: 'Annual Sports Festival', date: new Date('2026-03-15') }],
    skipDuplicates: true,
  });

  const event = await db.events.findFirst({
    where: { name: 'Annual Sports Festival' },
  });

  const sports = await db.sports.findMany({ take: 3 });
  await db.categories.createMany({
    data: sports.map((s) => ({
      events_id: event!.id,
      sportsID: s.id,
      category: s.name,
    })),
    skipDuplicates: true,
  });

  console.log('Seeded event and associated categories');
}

async function main() {
  await seedSports();
  await seedEvents();
  console.log('All seeds completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
