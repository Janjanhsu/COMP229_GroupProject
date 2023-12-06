//THIS FILE IS READY TO BE IMPORTED WHEN MAIN IS READY


// import { MongoClient } from "mongodb";

// const uri =
//   "mongodb+srv://dbAccess:6vUX3sSAFA7iqwpt@comp229cluster.2gmnzex.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri);

// async function dbConnect() {
//   try {
//     await client.connect();
//     console.log("Connected to database.");
//     await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// async function listDatabases(client) {
//   const databasesList = await client.db().admin().listDatabases();
//   databasesList.databases.forEach((db) => {
//     console.log(`- ${db.name}`);
//   });
// }
