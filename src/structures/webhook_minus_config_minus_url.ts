import { tags } from "typia";

/**
 * The URL to which the payloads will be delivered.
 */
export type webhook_minus_config_minus_url = string &
  tags.Format<"uri"> &
  tags.JsonSchemaPlugin<{
    example: "https://example.com/webhook";
  }>;
