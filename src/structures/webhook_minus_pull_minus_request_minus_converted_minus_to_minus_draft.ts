import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { webhooks_number } from "./webhooks_number";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { pull_minus_request_minus_webhook } from "./pull_minus_request_minus_webhook";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title pull_request converted_to_draft event
 */
export type webhook_minus_pull_minus_request_minus_converted_minus_to_minus_draft =
  {
    action: "converted_to_draft";
    enterprise?: enterprise_minus_webhooks;
    installation?: simple_minus_installation;
    number: webhooks_number;
    organization?: organization_minus_simple_minus_webhooks;
    pull_request: pull_minus_request_minus_webhook;
    repository: repository_minus_webhooks;
    sender: simple_minus_user_minus_webhooks;
  };
