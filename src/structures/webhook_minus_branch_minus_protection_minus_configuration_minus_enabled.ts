import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title branch protection configuration enabled event
 */
export type webhook_minus_branch_minus_protection_minus_configuration_minus_enabled =
  {
    action: "enabled";
    enterprise?: enterprise_minus_webhooks;
    installation?: simple_minus_installation;
    organization?: organization_minus_simple_minus_webhooks;
    repository: repository_minus_webhooks;
    sender: simple_minus_user_minus_webhooks;
  };
