import { copilot_minus_seat_minus_breakdown } from "./copilot_minus_seat_minus_breakdown";

/**
 * Information about the seat breakdown and policies set for an organization with a Copilot Business subscription.
 *
 * @title Copilot Business Organization Details
 */
export type copilot_minus_organization_minus_details = {
  seat_breakdown: copilot_minus_seat_minus_breakdown;
  /**
   * The organization policy for allowing or disallowing Copilot to make suggestions that match public code.
   */
  public_code_suggestions: "allow" | "block" | "unconfigured" | "unknown";
  /**
   * The organization policy for allowing or disallowing organization members to use Copilot Chat within their editor.
   */
  ide_chat?: "enabled" | "disabled" | "unconfigured";
  /**
   * The organization policy for allowing or disallowing organization members to use Copilot features within github.com.
   */
  platform_chat?: "enabled" | "disabled" | "unconfigured";
  /**
   * The organization policy for allowing or disallowing organization members to use Copilot within their CLI.
   */
  cli?: "enabled" | "disabled" | "unconfigured";
  /**
   * The mode of assigning new seats.
   */
  seat_management_setting:
    | "assign_all"
    | "assign_selected"
    | "disabled"
    | "unconfigured";
};
