import { webhooks_user } from "./webhooks_user";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { webhooks_issue } from "./webhooks_issue";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title issues assigned event
 */
export type webhook_minus_issues_minus_assigned = {
  /**
   * The action that was performed.
   */
  action: "assigned";
  assignee?: webhooks_user;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  issue: webhooks_issue;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
