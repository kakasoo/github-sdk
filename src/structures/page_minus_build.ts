import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * Page Build
 *
 * @title Page Build
 */
export type page_minus_build = {
  url: string & tags.Format<"uri">;
  status: string;
  error: {
    message: string | null;
  };
  pusher: nullable_minus_simple_minus_user;
  commit: string;
  duration: number & tags.Type<"int32">;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
};
