import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { issue } from "./issue";

/**
 * Timeline Cross Referenced Event
 *
 * @title Timeline Cross Referenced Event
 */
export type timeline_minus_cross_minus_referenced_minus_event = {
  event: string;
  actor?: simple_minus_user;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
  source: {
    type?: string;
    issue?: issue;
  };
};
