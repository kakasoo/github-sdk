import { tags } from "typia";

/**
 * The amount of time to delay a job after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days).
 */
export type wait_minus_timer = number &
  tags.Type<"int32"> &
  tags.JsonSchemaPlugin<{
    example: 30;
  }>;
