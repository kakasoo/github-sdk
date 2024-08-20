import { tags } from "typia";

/**
 * The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
 */
export type alert_minus_fixed_minus_at =
  | (string &
      tags.Format<"date-time"> &
      tags.JsonSchemaPlugin<{
        readOnly: true;
      }>)
  | null;
