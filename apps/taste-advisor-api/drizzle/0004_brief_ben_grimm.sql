CREATE TABLE IF NOT EXISTS "taste_advisor"."liked_recipes" (
	"user" integer,
	"recipe" integer
);
--> statement-breakpoint
ALTER TABLE "taste_advisor"."saved_recipes" RENAME COLUMN "author" TO "user";--> statement-breakpoint
ALTER TABLE "taste_advisor"."saved_recipes" DROP CONSTRAINT "saved_recipes_author_users_id_fk";
--> statement-breakpoint
ALTER TABLE "taste_advisor"."users" ADD COLUMN "avatar_url" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taste_advisor"."liked_recipes" ADD CONSTRAINT "liked_recipes_user_users_id_fk" FOREIGN KEY ("user") REFERENCES "taste_advisor"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taste_advisor"."liked_recipes" ADD CONSTRAINT "liked_recipes_recipe_recipes_id_fk" FOREIGN KEY ("recipe") REFERENCES "taste_advisor"."recipes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taste_advisor"."saved_recipes" ADD CONSTRAINT "saved_recipes_user_users_id_fk" FOREIGN KEY ("user") REFERENCES "taste_advisor"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
