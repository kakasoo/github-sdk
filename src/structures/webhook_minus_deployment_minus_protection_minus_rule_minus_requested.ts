import { tags } from "typia";

import { deployment } from "./deployment";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { pull_minus_request } from "./pull_minus_request";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title deployment protection rule requested event
 */
export type webhook_minus_deployment_minus_protection_minus_rule_minus_requested =
  {
    action?: "requested";
    /**
     * The name of the environment that has the deployment protection rule.
     */
    environment?: string;
    /**
     * The event that triggered the deployment protection rule.
     */
    event?: string;
    /**
     * The URL to review the deployment protection rule.
     */
    deployment_callback_url?: string & tags.Format<"uri">;
    deployment?: deployment;
    pull_requests?: pull_minus_request[];
    repository?: repository_minus_webhooks;
    organization?: organization_minus_simple_minus_webhooks;
    installation?: simple_minus_installation;
    sender?: simple_minus_user_minus_webhooks;
  };
