import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_sponsorship } from "./webhooks_sponsorship";

/**
 * @title sponsorship cancelled event
 */
export type webhook_minus_sponsorship_minus_cancelled = {
  action: "cancelled";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository?: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
  sponsorship: webhooks_sponsorship;
};
