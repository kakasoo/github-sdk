import { tags } from "typia";

/**
 * The REST API URL for fetching the list of instances for an alert.
 */
export type alert_minus_instances_minus_url = string &
  tags.Format<"uri"> &
  tags.JsonSchemaPlugin<{
    readOnly: true;
  }>;
