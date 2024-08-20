import { tags } from "typia";

/**
 * The breakdown of Copilot Business seats for the organization.
 *
 * @title Copilot Business Seat Breakdown
 */
export type copilot_minus_seat_minus_breakdown = {
  /**
   * The total number of seats being billed for the organization as of the current billing cycle.
   */
  total?: number & tags.Type<"int32">;
  /**
   * Seats added during the current billing cycle.
   */
  added_this_cycle?: number & tags.Type<"int32">;
  /**
   * The number of seats that are pending cancellation at the end of the current billing cycle.
   */
  pending_cancellation?: number & tags.Type<"int32">;
  /**
   * The number of seats that have been assigned to users that have not yet accepted an invitation to this organization.
   */
  pending_invitation?: number & tags.Type<"int32">;
  /**
   * The number of seats that have used Copilot during the current billing cycle.
   */
  active_this_cycle?: number & tags.Type<"int32">;
  /**
   * The number of seats that have not used Copilot during the current billing cycle.
   */
  inactive_this_cycle?: number & tags.Type<"int32">;
};
