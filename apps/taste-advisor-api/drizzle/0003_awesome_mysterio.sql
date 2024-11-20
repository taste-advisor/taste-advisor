ALTER TABLE "taste_advisor"."recipes" ALTER COLUMN "description" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "taste_advisor"."recipes" ADD COLUMN "instructions" text NOT NULL;--> statement-breakpoint
ALTER TABLE "taste_advisor"."recipes" ADD COLUMN "date" text NOT NULL;--> statement-breakpoint
ALTER TABLE "taste_advisor"."recipes" ADD COLUMN "image_url" text;--> statement-breakpoint
ALTER TABLE "taste_advisor"."recipes" ADD COLUMN "calories" numeric;--> statement-breakpoint
ALTER TABLE "taste_advisor"."recipes" ADD COLUMN "fat" numeric;--> statement-breakpoint
ALTER TABLE "taste_advisor"."recipes" ADD COLUMN "protein" numeric;--> statement-breakpoint
ALTER TABLE "taste_advisor"."recipes" ADD COLUMN "carbohydrate" numeric;--> statement-breakpoint
ALTER TABLE "taste_advisor"."recipes" ADD COLUMN "cholesterol" numeric;