import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { pull_minus_request_minus_webhook } from "./pull_minus_request_minus_webhook";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_number } from "./webhooks_number";

/**
 * @title pull_request ready_for_review event
 */
export type webhook_minus_pull_minus_request_minus_ready_minus_for_minus_review =
  {
    action: "ready_for_review";
    enterprise?: enterprise_minus_webhooks;
    installation?: simple_minus_installation;
    number: webhooks_number;
    organization?: organization_minus_simple_minus_webhooks;
    pull_request: pull_minus_request_minus_webhook;
    repository: repository_minus_webhooks;
    sender: simple_minus_user_minus_webhooks;
  };
