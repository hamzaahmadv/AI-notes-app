import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { profilesTable } from "./schema";

// Load environment variables
config({ path: ".env.local" });

// Validate DATABASE_URL
if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not defined in environment variables");
  throw new Error("Database configuration error: DATABASE_URL is missing");
}

const schema = {
  profiles: profilesTable
};

let client;
try {
  console.log("Attempting to connect to database...");
  // Remove password from log for security
  const dbUrlForLogging = process.env.DATABASE_URL?.replace(/:[^:@]+@/, ':***@');
  console.log(`Using connection string: ${dbUrlForLogging}`);
  
  client = postgres(process.env.DATABASE_URL!, {
    max: 10,
    idle_timeout: 20,
    connect_timeout: 30, // Increase timeout to 30 seconds
  });
  
  // Test the connection
  client.unsafe("SELECT 1").then(() => {
    console.log("✅ Database connection test successful");
  }).catch(err => {
    console.error("❌ Database connection test failed:", err);
  });
  
  console.log("Database client initialized");
} catch (error) {
  console.error("Failed to initialize database connection:", error);
  throw new Error("Database connection error");
}

// Export the drizzle db instance
export const db = drizzle(client!, { schema });
