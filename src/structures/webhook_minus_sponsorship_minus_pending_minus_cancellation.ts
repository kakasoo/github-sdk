import { webhooks_effective_date } from "./webhooks_effective_date";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_sponsorship } from "./webhooks_sponsorship";

/**
 * @title sponsorship pending_cancellation event
 */
export type webhook_minus_sponsorship_minus_pending_minus_cancellation = {
  action: "pending_cancellation";
  effective_date?: webhooks_effective_date;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository?: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
  sponsorship: webhooks_sponsorship;
};
