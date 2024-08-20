import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { webhooks_membership } from "./webhooks_membership";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title organization deleted event
 */
export type webhook_minus_organization_minus_deleted = {
  action: "deleted";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  membership?: webhooks_membership;
  organization: organization_minus_simple_minus_webhooks;
  repository?: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
