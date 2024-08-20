import { tags } from "typia";

/**
 * Describe a region within a file for the alert.
 */
export type code_minus_scanning_minus_alert_minus_location = {
  path?: string;
  start_line?: number & tags.Type<"int32">;
  end_line?: number & tags.Type<"int32">;
  start_column?: number & tags.Type<"int32">;
  end_column?: number & tags.Type<"int32">;
};
