import { tags } from "typia";

import { marketplace_minus_listing_minus_plan } from "./marketplace_minus_listing_minus_plan";

/**
 * Marketplace Purchase
 *
 * @title Marketplace Purchase
 */
export type marketplace_minus_purchase = {
  url: string;
  type: string;
  id: number & tags.Type<"int32">;
  login: string;
  organization_billing_email?: string;
  email?: string | null;
  marketplace_pending_change?: {
    is_installed?: boolean;
    effective_date?: string;
    unit_count?: (number & tags.Type<"int32">) | null;
    id?: number & tags.Type<"int32">;
    plan?: marketplace_minus_listing_minus_plan;
  } | null;
  marketplace_purchase: {
    billing_cycle?: string;
    next_billing_date?: string | null;
    is_installed?: boolean;
    unit_count?: (number & tags.Type<"int32">) | null;
    on_free_trial?: boolean;
    free_trial_ends_on?: string | null;
    updated_at?: string;
    plan?: marketplace_minus_listing_minus_plan;
  };
};
