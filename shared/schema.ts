import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const githubStats = pgTable("github_stats", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  repository: text("repository").notNull(),
  stars: integer("stars").notNull().default(0),
  forks: integer("forks").notNull().default(0),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertGithubStatsSchema = createInsertSchema(githubStats).omit({
  id: true,
  lastUpdated: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type GithubStats = typeof githubStats.$inferSelect;
export type InsertGithubStats = z.infer<typeof insertGithubStatsSchema>;
