import { tags } from "typia";

/**
 * @title Marketplace Purchase
 */
export type webhooks_marketplace_purchase = {
  account: {
    id: number & tags.Type<"int32">;
    login: string;
    node_id: string;
    organization_billing_email: string | null;
    type: string;
  };
  billing_cycle: string;
  free_trial_ends_on: string | null;
  next_billing_date: string | null;
  on_free_trial: boolean;
  plan: {
    bullets: (string | null)[];
    description: string;
    has_free_trial: boolean;
    id: number & tags.Type<"int32">;
    monthly_price_in_cents: number & tags.Type<"int32">;
    name: string;
    price_model: "FREE" | "FLAT_RATE" | "PER_UNIT";
    unit_name: string | null;
    yearly_price_in_cents: number & tags.Type<"int32">;
  };
  unit_count: number & tags.Type<"int32">;
};
