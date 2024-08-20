import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { installation } from "./installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { webhooks_repositories } from "./webhooks_repositories";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { webhooks_user } from "./webhooks_user";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title installation created event
 */
export type webhook_minus_installation_minus_created = {
  action: "created";
  enterprise?: enterprise_minus_webhooks;
  installation: installation;
  organization?: organization_minus_simple_minus_webhooks;
  repositories?: webhooks_repositories;
  repository?: repository_minus_webhooks;
  requester?: webhooks_user;
  sender: simple_minus_user_minus_webhooks;
};
