import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { webhooks_milestone_3 } from "./webhooks_milestone_3";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title milestone opened event
 */
export type webhook_minus_milestone_minus_opened = {
  action: "opened";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  milestone: webhooks_milestone_3;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
