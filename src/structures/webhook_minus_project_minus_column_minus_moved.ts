import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_project_column } from "./webhooks_project_column";

/**
 * @title project_column moved event
 */
export type webhook_minus_project_minus_column_minus_moved = {
  action: "moved";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  project_column: webhooks_project_column;
  repository?: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
