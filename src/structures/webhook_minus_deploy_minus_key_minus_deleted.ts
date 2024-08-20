import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { webhooks_deploy_key } from "./webhooks_deploy_key";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title deploy_key deleted event
 */
export type webhook_minus_deploy_minus_key_minus_deleted = {
  action: "deleted";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  key: webhooks_deploy_key;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
