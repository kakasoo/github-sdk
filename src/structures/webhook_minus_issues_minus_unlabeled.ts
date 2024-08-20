import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { webhooks_issue } from "./webhooks_issue";
import { webhooks_label } from "./webhooks_label";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title issues unlabeled event
 */
export type webhook_minus_issues_minus_unlabeled = {
  action: "unlabeled";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  issue: webhooks_issue;
  label?: webhooks_label;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
