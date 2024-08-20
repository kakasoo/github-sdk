import { tags } from "typia";

import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { projects_minus_v2_minus_status_minus_update } from "./projects_minus_v2_minus_status_minus_update";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title Projects v2 Status Update Edited Event
 */
export type webhook_minus_projects_minus_v2_minus_status_minus_update_minus_edited =
  {
    action: "edited";
    changes?: {
      body?: {
        from?: string | null;
        to?: string | null;
      };
      status?: {
        from?:
          | "INACTIVE"
          | "ON_TRACK"
          | "AT_RISK"
          | "OFF_TRACK"
          | "COMPLETE"
          | null;
        to?:
          | "INACTIVE"
          | "ON_TRACK"
          | "AT_RISK"
          | "OFF_TRACK"
          | "COMPLETE"
          | null;
      };
      start_date?: {
        from?: (string & tags.Format<"date">) | null;
        to?: (string & tags.Format<"date">) | null;
      };
      target_date?: {
        from?: (string & tags.Format<"date">) | null;
        to?: (string & tags.Format<"date">) | null;
      };
    };
    installation?: simple_minus_installation;
    organization: organization_minus_simple_minus_webhooks;
    projects_v2_status_update: projects_minus_v2_minus_status_minus_update;
    sender: simple_minus_user_minus_webhooks;
  };
