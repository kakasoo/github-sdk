import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_changes_8 } from "./webhooks_changes_8";
import { webhooks_effective_date } from "./webhooks_effective_date";
import { webhooks_sponsorship } from "./webhooks_sponsorship";

/**
 * @title sponsorship pending_tier_change event
 */
export type webhook_minus_sponsorship_minus_pending_minus_tier_minus_change = {
  action: "pending_tier_change";
  changes: webhooks_changes_8;
  effective_date?: webhooks_effective_date;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository?: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
  sponsorship: webhooks_sponsorship;
};
