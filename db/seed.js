import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO

  for (let i = 1; i <= 3; i++) {
    const folder = await createFolder("Folder " + i);
    for (let j = 1; i <= 5; j++) {
      await createFile("File " + j, 1000 * j, folder.id);
    }
  }
}
