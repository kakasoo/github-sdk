import { tags } from "typia";

/**
 * @title Traffic
 */
export type traffic = {
  timestamp: string & tags.Format<"date-time">;
  uniques: number & tags.Type<"int32">;
  count: number & tags.Type<"int32">;
};
