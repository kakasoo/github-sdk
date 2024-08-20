import { tags } from "typia";

export type combined_minus_billing_minus_usage = {
  /**
   * Numbers of days left in billing cycle.
   */
  days_left_in_billing_cycle: number & tags.Type<"int32">;
  /**
   * Estimated storage space (GB) used in billing cycle.
   */
  estimated_paid_storage_for_month: number & tags.Type<"int32">;
  /**
   * Estimated sum of free and paid storage space (GB) used in billing cycle.
   */
  estimated_storage_for_month: number & tags.Type<"int32">;
};
