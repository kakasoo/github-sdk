import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { projects_minus_v2 } from "./projects_minus_v2";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title Projects v2 Project Deleted Event
 */
export type webhook_minus_projects_minus_v2_minus_project_minus_deleted = {
  action: "deleted";
  installation?: simple_minus_installation;
  organization: organization_minus_simple_minus_webhooks;
  projects_v2: projects_minus_v2;
  sender: simple_minus_user_minus_webhooks;
};