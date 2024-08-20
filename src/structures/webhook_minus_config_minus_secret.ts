import { tags } from "typia";

/**
 * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
 */
export type webhook_minus_config_minus_secret = string &
  tags.JsonSchemaPlugin<{
    example: '"********"';
  }>;
