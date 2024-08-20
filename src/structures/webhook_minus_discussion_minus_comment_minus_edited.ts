import { webhooks_comment } from "./webhooks_comment";
import { discussion } from "./discussion";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title discussion_comment edited event
 */
export type webhook_minus_discussion_minus_comment_minus_edited = {
  action: "edited";
  changes: {
    body: {
      from: string;
    };
  };
  comment: webhooks_comment;
  discussion: discussion;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
