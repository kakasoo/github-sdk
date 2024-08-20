import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_user } from "./webhooks_user";

/**
 * @title org_block unblocked event
 */
export type webhook_minus_org_minus_block_minus_unblocked = {
  action: "unblocked";
  blocked_user: webhooks_user;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization: organization_minus_simple_minus_webhooks;
  repository?: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
