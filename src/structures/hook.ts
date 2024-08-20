import { tags } from "typia";

import { webhook_minus_config } from "./webhook_minus_config";
import { hook_minus_response } from "./hook_minus_response";

/**
 * Webhooks for repositories.
 *
 * @title Webhook
 */
export type hook = {
  type: string;
  /**
   * Unique identifier of the webhook.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  /**
   * The name of a valid service, use 'web' for a webhook.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "web";
    }>;
  /**
   * Determines whether the hook is actually triggered on pushes.
   */
  active: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Determines what events the hook is triggered for. Default: ['push'].
   */
  events: string[] &
    tags.JsonSchemaPlugin<{
      example: ["push", "pull_request"];
    }>;
  config: webhook_minus_config;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-09-06T20:39:23Z";
    }>;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-09-06T17:26:27Z";
    }>;
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/hooks/1";
    }>;
  test_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/hooks/1/test";
    }>;
  ping_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/hooks/1/pings";
    }>;
  deliveries_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/hooks/1/deliveries";
    }>;
  last_response: hook_minus_response;
};
