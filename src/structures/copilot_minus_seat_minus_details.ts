import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { organization_minus_simple } from "./organization_minus_simple";
import { team } from "./team";
import { enterprise_minus_team } from "./enterprise_minus_team";

/**
 * Information about a Copilot Business seat assignment for a user, team, or organization.
 *
 * @title Copilot Business Seat Detail
 */
export type copilot_minus_seat_minus_details = {
  /**
   * The assignee that has been granted access to GitHub Copilot.
   */
  assignee: simple_minus_user;
  /**
   * The organization to which this seat belongs.
   */
  organization?: organization_minus_simple | null;
  /**
   * The team through which the assignee is granted access to GitHub Copilot, if applicable.
   */
  assigning_team?: team | enterprise_minus_team | null;
  /**
   * The pending cancellation date for the seat, in `YYYY-MM-DD` format. This will be null unless the assignee's Copilot access has been canceled during the current billing cycle. If the seat has been cancelled, this corresponds to the start of the organization's next billing cycle.
   */
  pending_cancellation_date?: (string & tags.Format<"date">) | null;
  /**
   * Timestamp of user's last GitHub Copilot activity, in ISO 8601 format.
   */
  last_activity_at?: (string & tags.Format<"date-time">) | null;
  /**
   * Last editor that was used by the user for a GitHub Copilot completion.
   */
  last_activity_editor?: string | null;
  /**
   * Timestamp of when the assignee was last granted access to GitHub Copilot, in ISO 8601 format.
   */
  created_at: string & tags.Format<"date-time">;
  /**
   * Timestamp of when the assignee's GitHub Copilot access was last updated, in ISO 8601 format.
   */
  updated_at?: string & tags.Format<"date-time">;
};
