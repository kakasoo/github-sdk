import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { webhooks_marketplace_purchase } from "./webhooks_marketplace_purchase";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { webhooks_previous_marketplace_purchase } from "./webhooks_previous_marketplace_purchase";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title marketplace_purchase cancelled event
 */
export type webhook_minus_marketplace_minus_purchase_minus_cancelled = {
  action: "cancelled";
  effective_date: string;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  marketplace_purchase: webhooks_marketplace_purchase;
  organization?: organization_minus_simple_minus_webhooks;
  previous_marketplace_purchase?: webhooks_previous_marketplace_purchase;
  repository?: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
