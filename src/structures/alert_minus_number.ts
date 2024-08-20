import { tags } from "typia";

/**
 * The security alert number.
 */
export type alert_minus_number = number &
  tags.Type<"int32"> &
  tags.JsonSchemaPlugin<{
    readOnly: true;
  }>;
