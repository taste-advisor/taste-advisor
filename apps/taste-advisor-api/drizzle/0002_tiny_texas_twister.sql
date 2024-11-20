CREATE TABLE IF NOT EXISTS "taste_advisor"."recipe_categories" (
	"type" integer,
	"recipe" integer
);
--> statement-breakpoint
ALTER TABLE "taste_advisor"."recipes" DROP CONSTRAINT IF EXISTS "recipes_type_recipe_types_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taste_advisor"."recipe_categories" ADD CONSTRAINT "recipe_categories_type_recipe_types_id_fk" FOREIGN KEY ("type") REFERENCES "taste_advisor"."recipe_types"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taste_advisor"."recipe_categories" ADD CONSTRAINT "recipe_categories_recipe_recipes_id_fk" FOREIGN KEY ("recipe") REFERENCES "taste_advisor"."recipes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "taste_advisor"."recipes" DROP COLUMN IF EXISTS "type";
