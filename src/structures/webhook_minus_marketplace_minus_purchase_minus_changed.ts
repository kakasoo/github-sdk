import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { webhooks_marketplace_purchase } from "./webhooks_marketplace_purchase";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title marketplace_purchase changed event
 */
export type webhook_minus_marketplace_minus_purchase_minus_changed = {
  action: "changed";
  effective_date: string;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  marketplace_purchase: webhooks_marketplace_purchase;
  organization?: organization_minus_simple_minus_webhooks;
  /**
   * @title Marketplace Purchase
   */
  previous_marketplace_purchase?: {
    account: {
      id: number & tags.Type<"int32">;
      login: string;
      node_id: string;
      organization_billing_email: string | null;
      type: string;
    };
    billing_cycle: string;
    free_trial_ends_on: string | null;
    next_billing_date?: string | null;
    on_free_trial: boolean | null;
    plan: {
      bullets: string[];
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
  repository?: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
