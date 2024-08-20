import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_issue } from "./webhooks_issue";
import { webhooks_user_mannequin } from "./webhooks_user_mannequin";

/**
 * @title issues unassigned event
 */
export type webhook_minus_issues_minus_unassigned = {
  /**
   * The action that was performed.
   */
  action: "unassigned";
  assignee?: webhooks_user_mannequin;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  issue: webhooks_issue;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
