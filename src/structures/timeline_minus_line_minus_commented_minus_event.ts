import { pull_minus_request_minus_review_minus_comment } from "./pull_minus_request_minus_review_minus_comment";

/**
 * Timeline Line Commented Event
 *
 * @title Timeline Line Commented Event
 */
export type timeline_minus_line_minus_commented_minus_event = {
  event?: string;
  node_id?: string;
  comments?: pull_minus_request_minus_review_minus_comment[];
};
