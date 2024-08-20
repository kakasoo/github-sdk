import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { installation } from "./installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { webhooks_repositories } from "./webhooks_repositories";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title installation new_permissions_accepted event
 */
export type webhook_minus_installation_minus_new_minus_permissions_minus_accepted =
  {
    action: "new_permissions_accepted";
    enterprise?: enterprise_minus_webhooks;
    installation: installation;
    organization?: organization_minus_simple_minus_webhooks;
    repositories?: webhooks_repositories;
    repository?: repository_minus_webhooks;
    requester?: any | null;
    sender: simple_minus_user_minus_webhooks;
  };