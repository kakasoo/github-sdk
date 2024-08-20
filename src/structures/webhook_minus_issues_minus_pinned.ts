import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { webhooks_issue_2 } from "./webhooks_issue_2";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title issues pinned event
 */
export type webhook_minus_issues_minus_pinned = {
  action: "pinned";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  issue: webhooks_issue_2;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
