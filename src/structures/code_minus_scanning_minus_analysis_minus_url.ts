import { tags } from "typia";

/**
 * The REST API URL of the analysis resource.
 */
export type code_minus_scanning_minus_analysis_minus_url = string &
  tags.Format<"uri"> &
  tags.JsonSchemaPlugin<{
    readOnly: true;
  }>;
