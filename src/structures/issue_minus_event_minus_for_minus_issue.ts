import { labeled_minus_issue_minus_event } from "./labeled_minus_issue_minus_event";
import { unlabeled_minus_issue_minus_event } from "./unlabeled_minus_issue_minus_event";
import { assigned_minus_issue_minus_event } from "./assigned_minus_issue_minus_event";
import { unassigned_minus_issue_minus_event } from "./unassigned_minus_issue_minus_event";
import { milestoned_minus_issue_minus_event } from "./milestoned_minus_issue_minus_event";
import { demilestoned_minus_issue_minus_event } from "./demilestoned_minus_issue_minus_event";
import { renamed_minus_issue_minus_event } from "./renamed_minus_issue_minus_event";
import { review_minus_requested_minus_issue_minus_event } from "./review_minus_requested_minus_issue_minus_event";
import { review_minus_request_minus_removed_minus_issue_minus_event } from "./review_minus_request_minus_removed_minus_issue_minus_event";
import { review_minus_dismissed_minus_issue_minus_event } from "./review_minus_dismissed_minus_issue_minus_event";
import { locked_minus_issue_minus_event } from "./locked_minus_issue_minus_event";
import { added_minus_to_minus_project_minus_issue_minus_event } from "./added_minus_to_minus_project_minus_issue_minus_event";
import { moved_minus_column_minus_in_minus_project_minus_issue_minus_event } from "./moved_minus_column_minus_in_minus_project_minus_issue_minus_event";
import { removed_minus_from_minus_project_minus_issue_minus_event } from "./removed_minus_from_minus_project_minus_issue_minus_event";
import { converted_minus_note_minus_to_minus_issue_minus_issue_minus_event } from "./converted_minus_note_minus_to_minus_issue_minus_issue_minus_event";

/**
 * Issue Event for Issue
 *
 * @title Issue Event for Issue
 */
export type issue_minus_event_minus_for_minus_issue =
  | labeled_minus_issue_minus_event
  | unlabeled_minus_issue_minus_event
  | assigned_minus_issue_minus_event
  | unassigned_minus_issue_minus_event
  | milestoned_minus_issue_minus_event
  | demilestoned_minus_issue_minus_event
  | renamed_minus_issue_minus_event
  | review_minus_requested_minus_issue_minus_event
  | review_minus_request_minus_removed_minus_issue_minus_event
  | review_minus_dismissed_minus_issue_minus_event
  | locked_minus_issue_minus_event
  | added_minus_to_minus_project_minus_issue_minus_event
  | moved_minus_column_minus_in_minus_project_minus_issue_minus_event
  | removed_minus_from_minus_project_minus_issue_minus_event
  | converted_minus_note_minus_to_minus_issue_minus_issue_minus_event;