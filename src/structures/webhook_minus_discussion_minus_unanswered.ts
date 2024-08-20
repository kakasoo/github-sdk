import { discussion } from "./discussion";
import { webhooks_answer } from "./webhooks_answer";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title discussion unanswered event
 */
export type webhook_minus_discussion_minus_unanswered = {
  action: "unanswered";
  discussion: discussion;
  old_answer: webhooks_answer;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
};
