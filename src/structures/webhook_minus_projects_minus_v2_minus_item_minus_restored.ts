import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { projects_minus_v2_minus_item } from "./projects_minus_v2_minus_item";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_project_changes } from "./webhooks_project_changes";

/**
 * @title Projects v2 Item Restored Event
 */
export type webhook_minus_projects_minus_v2_minus_item_minus_restored = {
  action: "restored";
  changes: webhooks_project_changes;
  installation?: simple_minus_installation;
  organization: organization_minus_simple_minus_webhooks;
  projects_v2_item: projects_minus_v2_minus_item;
  sender: simple_minus_user_minus_webhooks;
};
