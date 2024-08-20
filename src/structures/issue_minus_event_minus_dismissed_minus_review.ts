import { tags } from "typia";

/**
 * @title Issue Event Dismissed Review
 */
export type issue_minus_event_minus_dismissed_minus_review = {
  state: string;
  review_id: number & tags.Type<"int32">;
  dismissal_message: string | null;
  dismissal_commit_id?: string | null;
};
