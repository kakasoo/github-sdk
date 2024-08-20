import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { projects_minus_v2_minus_status_minus_update } from "./projects_minus_v2_minus_status_minus_update";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title Projects v2 Status Update Deleted Event
 */
export type webhook_minus_projects_minus_v2_minus_status_minus_update_minus_deleted =
  {
    action: "deleted";
    installation?: simple_minus_installation;
    organization: organization_minus_simple_minus_webhooks;
    projects_v2_status_update: projects_minus_v2_minus_status_minus_update;
    sender: simple_minus_user_minus_webhooks;
  };
