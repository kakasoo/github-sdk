import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { secret_minus_scanning_minus_alert_minus_webhook } from "./secret_minus_scanning_minus_alert_minus_webhook";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title secret_scanning_alert resolved event
 */
export type webhook_minus_secret_minus_scanning_minus_alert_minus_resolved = {
  action: "resolved";
  alert: secret_minus_scanning_minus_alert_minus_webhook;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
};
