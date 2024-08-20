import { tags } from "typia";

export type webhooks_changes_8 = {
  tier: {
    /**
     * The `tier_changed` and `pending_tier_change` will include the original tier before the change or pending change. For more information, see the pending tier change payload.
     *
     * @title Sponsorship Tier
     */
    from: {
      created_at: string;
      description: string;
      is_custom_ammount?: boolean;
      is_custom_amount?: boolean;
      is_one_time: boolean;
      monthly_price_in_cents: number & tags.Type<"int32">;
      monthly_price_in_dollars: number & tags.Type<"int32">;
      name: string;
      node_id: string;
    };
  };
};
