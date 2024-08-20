import { tags } from "typia";

/**
 * The GitHub URL of the alert resource.
 */
export type alert_minus_html_minus_url = string &
  tags.Format<"uri"> &
  tags.JsonSchemaPlugin<{
    readOnly: true;
  }>;
