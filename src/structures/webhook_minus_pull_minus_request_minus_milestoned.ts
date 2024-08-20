import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { milestone } from "./milestone";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_number } from "./webhooks_number";
import { webhooks_pull_request_5 } from "./webhooks_pull_request_5";

/**
 * @title pull_request milestoned event
 */
export type webhook_minus_pull_minus_request_minus_milestoned = {
  action: "milestoned";
  enterprise?: enterprise_minus_webhooks;
  milestone?: milestone;
  number: webhooks_number;
  organization?: organization_minus_simple_minus_webhooks;
  pull_request: webhooks_pull_request_5;
  repository: repository_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
};
