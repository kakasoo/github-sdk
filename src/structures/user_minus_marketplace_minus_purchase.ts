import { tags } from "typia";

import { marketplace_minus_account } from "./marketplace_minus_account";
import { marketplace_minus_listing_minus_plan } from "./marketplace_minus_listing_minus_plan";

/**
 * User Marketplace Purchase
 *
 * @title User Marketplace Purchase
 */
export type user_minus_marketplace_minus_purchase = {
  billing_cycle: string &
    tags.JsonSchemaPlugin<{
      example: "monthly";
    }>;
  next_billing_date:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2017-11-11T00:00:00Z";
        }>)
    | null;
  unit_count: (number & tags.Type<"int32">) | null;
  on_free_trial: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  free_trial_ends_on:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2017-11-11T00:00:00Z";
        }>)
    | null;
  updated_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2017-11-02T01:12:12Z";
        }>)
    | null;
  account: marketplace_minus_account;
  plan: marketplace_minus_listing_minus_plan;
};
