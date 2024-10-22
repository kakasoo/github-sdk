import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_deploy_key } from "./webhooks_deploy_key";

/**
 * @title deploy_key created event
 */
export type webhook_minus_deploy_minus_key_minus_created = {
  action: "created";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  key: webhooks_deploy_key;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
