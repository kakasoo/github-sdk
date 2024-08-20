import { tags } from "typia";

/**
 * @title Rate Limit
 */
export type rate_minus_limit = {
  limit: number & tags.Type<"int32">;
  remaining: number & tags.Type<"int32">;
  reset: number & tags.Type<"int32">;
  used: number & tags.Type<"int32">;
};
