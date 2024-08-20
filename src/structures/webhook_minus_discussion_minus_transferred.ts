import { discussion } from "./discussion";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title discussion transferred event
 */
export type webhook_minus_discussion_minus_transferred = {
  action: "transferred";
  changes: {
    new_discussion: discussion;
    new_repository: repository_minus_webhooks;
  };
  discussion: discussion;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
