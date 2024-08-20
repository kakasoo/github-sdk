import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * Stargazer
 *
 * @title Stargazer
 */
export type stargazer = {
  starred_at: string & tags.Format<"date-time">;
  user: nullable_minus_simple_minus_user;
};
