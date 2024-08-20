import { tags } from "typia";

/**
 * The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
 */
export type nullable_minus_alert_minus_updated_minus_at =
  | (string &
      tags.Format<"date-time"> &
      tags.JsonSchemaPlugin<{
        readOnly: true;
      }>)
  | null;
