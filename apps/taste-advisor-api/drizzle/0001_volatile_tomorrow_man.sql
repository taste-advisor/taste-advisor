CREATE SCHEMA IF NOT EXISTS "taste_advisor";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "taste_advisor"."recipe_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
ALTER TABLE "taste_advisor"."recipes" ADD COLUMN "type" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taste_advisor"."recipes" ADD CONSTRAINT "recipes_type_recipe_types_id_fk" FOREIGN KEY ("type") REFERENCES "taste_advisor"."recipe_types"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
