import { tags } from "typia";

/**
 * The time that the analysis was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
 */
export type code_minus_scanning_minus_analysis_minus_created_minus_at = string &
  tags.Format<"date-time"> &
  tags.JsonSchemaPlugin<{
    readOnly: true;
  }>;
