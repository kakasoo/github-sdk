import { tags } from "typia";

/**
 * The REST API URL of the alert resource.
 */
export type alert_minus_url = string &
  tags.Format<"uri"> &
  tags.JsonSchemaPlugin<{
    readOnly: true;
  }>;
