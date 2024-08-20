import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_security_advisory } from "./webhooks_security_advisory";

/**
 * @title security_advisory published event
 */
export type webhook_minus_security_minus_advisory_minus_published = {
  action: "published";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository?: repository_minus_webhooks;
  security_advisory: webhooks_security_advisory;
  sender?: simple_minus_user_minus_webhooks;
};
