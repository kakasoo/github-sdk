import { commit_minus_comment } from "./commit_minus_comment";

/**
 * Timeline Commit Commented Event
 *
 * @title Timeline Commit Commented Event
 */
export type timeline_minus_commit_minus_commented_minus_event = {
  event?: string;
  node_id?: string;
  commit_id?: string;
  comments?: commit_minus_comment[];
};
