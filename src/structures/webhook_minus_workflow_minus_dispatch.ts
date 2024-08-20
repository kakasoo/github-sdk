import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title workflow_dispatch event
 */
export type webhook_minus_workflow_minus_dispatch = {
  enterprise?: enterprise_minus_webhooks;
  inputs: {} | null;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  ref: string;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
  workflow: string;
};
