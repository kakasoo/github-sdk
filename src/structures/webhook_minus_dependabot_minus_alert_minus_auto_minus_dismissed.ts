import { dependabot_minus_alert } from "./dependabot_minus_alert";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title Dependabot alert auto-dismissed event
 */
export type webhook_minus_dependabot_minus_alert_minus_auto_minus_dismissed = {
  action: "auto_dismissed";
  alert: dependabot_minus_alert;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  enterprise?: enterprise_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
