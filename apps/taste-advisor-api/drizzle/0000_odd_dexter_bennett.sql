CREATE TABLE IF NOT EXISTS "taste_advisor"."users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "taste_advisor"."recipes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"author" integer,
	"likes" integer NOT NULL,
	"dislikes" integer NOT NULL,
	"ingredients" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "taste_advisor"."comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"author" integer,
	"recipe" integer,
	"content" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "taste_advisor"."saved_recipes" (
	"author" integer,
	"recipe" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taste_advisor"."recipes" ADD CONSTRAINT "recipes_author_users_id_fk" FOREIGN KEY ("author") REFERENCES "taste_advisor"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taste_advisor"."comments" ADD CONSTRAINT "comments_author_users_id_fk" FOREIGN KEY ("author") REFERENCES "taste_advisor"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taste_advisor"."comments" ADD CONSTRAINT "comments_recipe_recipes_id_fk" FOREIGN KEY ("recipe") REFERENCES "taste_advisor"."recipes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taste_advisor"."saved_recipes" ADD CONSTRAINT "saved_recipes_author_users_id_fk" FOREIGN KEY ("author") REFERENCES "taste_advisor"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taste_advisor"."saved_recipes" ADD CONSTRAINT "saved_recipes_recipe_recipes_id_fk" FOREIGN KEY ("recipe") REFERENCES "taste_advisor"."recipes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
