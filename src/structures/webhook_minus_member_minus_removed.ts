import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { webhooks_user } from "./webhooks_user";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title member removed event
 */
export type webhook_minus_member_minus_removed = {
  action: "removed";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  member: webhooks_user;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
