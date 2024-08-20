import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { webhooks_previous_marketplace_purchase } from "./webhooks_previous_marketplace_purchase";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title marketplace_purchase pending_change_cancelled event
 */
export type webhook_minus_marketplace_minus_purchase_minus_pending_minus_change_minus_cancelled =
  {
    action: "pending_change_cancelled";
    effective_date: string;
    enterprise?: enterprise_minus_webhooks;
    installation?: simple_minus_installation;
    /**
     * @title Marketplace Purchase
     */
    marketplace_purchase: {
      account: {
        id: number & tags.Type<"int32">;
        login: string;
        node_id: string;
        organization_billing_email: string | null;
        type: string;
      };
      billing_cycle: string;
      free_trial_ends_on: any | null;
      next_billing_date: string | null;
      on_free_trial: boolean;
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
    organization?: organization_minus_simple_minus_webhooks;
    previous_marketplace_purchase?: webhooks_previous_marketplace_purchase;
    repository?: repository_minus_webhooks;
    sender: simple_minus_user_minus_webhooks;
  };
