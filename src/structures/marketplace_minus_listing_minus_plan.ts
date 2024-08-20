import { tags } from "typia";

/**
 * Marketplace Listing Plan
 *
 * @title Marketplace Listing Plan
 */
export type marketplace_minus_listing_minus_plan = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/marketplace_listing/plans/1313";
    }>;
  accounts_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/marketplace_listing/plans/1313/accounts";
    }>;
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1313;
    }>;
  number: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 3;
    }>;
  name: string &
    tags.JsonSchemaPlugin<{
      example: "Pro";
    }>;
  description: string &
    tags.JsonSchemaPlugin<{
      example: "A professional-grade CI solution";
    }>;
  monthly_price_in_cents: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1099;
    }>;
  yearly_price_in_cents: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 11870;
    }>;
  price_model: "FREE" | "FLAT_RATE" | "PER_UNIT";
  has_free_trial: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  unit_name: string | null;
  state: string &
    tags.JsonSchemaPlugin<{
      example: "published";
    }>;
  bullets: string[] &
    tags.JsonSchemaPlugin<{
      example: ["Up to 25 private repositories", "11 concurrent builds"];
    }>;
};
