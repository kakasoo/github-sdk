import { tags } from "typia";

import { hook_minus_response } from "./hook_minus_response";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhook_minus_config_minus_content_minus_type } from "./webhook_minus_config_minus_content_minus_type";
import { webhook_minus_config_minus_insecure_minus_ssl } from "./webhook_minus_config_minus_insecure_minus_ssl";
import { webhook_minus_config_minus_secret } from "./webhook_minus_config_minus_secret";
import { webhook_minus_config_minus_url } from "./webhook_minus_config_minus_url";

export type webhook_minus_ping = {
  /**
   * The webhook that is being pinged
   *
   * @title Webhook
   */
  hook?: {
    /**
     * Determines whether the hook is actually triggered for the events it subscribes to.
     */
    active: boolean;
    /**
     * Only included for GitHub Apps. When you register a new GitHub App, GitHub sends a ping event to the webhook URL you specified during registration. The GitHub App ID sent in this field is required for authenticating an app.
     */
    app_id?: number & tags.Type<"int32">;
    config: {
      content_type?: webhook_minus_config_minus_content_minus_type;
      insecure_ssl?: webhook_minus_config_minus_insecure_minus_ssl;
      secret?: webhook_minus_config_minus_secret;
      url?: webhook_minus_config_minus_url;
    };
    created_at: string & tags.Format<"date-time">;
    deliveries_url?: string & tags.Format<"uri">;
    /**
     * Determines what events the hook is triggered for. Default: ['push'].
     */
    events: string[];
    /**
     * Unique identifier of the webhook.
     */
    id: number & tags.Type<"int32">;
    last_response?: hook_minus_response;
    /**
     * The type of webhook. The only valid value is 'web'.
     */
    name: "web";
    ping_url?: string & tags.Format<"uri">;
    test_url?: string & tags.Format<"uri">;
    type: string;
    updated_at: string & tags.Format<"date-time">;
    url?: string & tags.Format<"uri">;
  };
  /**
   * The ID of the webhook that triggered the ping.
   */
  hook_id?: number & tags.Type<"int32">;
  organization?: organization_minus_simple_minus_webhooks;
  repository?: repository_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
  /**
   * Random string of GitHub zen.
   */
  zen?: string;
};
