import { discussion } from "./discussion";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_label } from "./webhooks_label";

/**
 * @title discussion labeled event
 */
export type webhook_minus_discussion_minus_labeled = {
  action: "labeled";
  discussion: discussion;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  label: webhooks_label;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
