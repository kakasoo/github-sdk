import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { repository_minus_advisory } from "./repository_minus_advisory";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title Repository advisory reported event
 */
export type webhook_minus_repository_minus_advisory_minus_reported = {
  action: "reported";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  repository_advisory: repository_minus_advisory;
  sender?: simple_minus_user_minus_webhooks;
};
