import { tags } from "typia";

/**
 * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
 */
export type webhook_minus_config_minus_content_minus_type = string &
  tags.JsonSchemaPlugin<{
    example: '"json"';
  }>;
