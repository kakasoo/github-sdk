import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { nullable_minus_repository_minus_webhooks } from "./nullable_minus_repository_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_project } from "./webhooks_project";

/**
 * @title project deleted event
 */
export type webhook_minus_project_minus_deleted = {
  action: "deleted";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  project: webhooks_project;
  repository?: nullable_minus_repository_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
};
