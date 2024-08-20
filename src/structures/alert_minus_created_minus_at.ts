import { tags } from "typia";

/**
 * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
 */
export type alert_minus_created_minus_at = string &
  tags.Format<"date-time"> &
  tags.JsonSchemaPlugin<{
    readOnly: true;
  }>;
