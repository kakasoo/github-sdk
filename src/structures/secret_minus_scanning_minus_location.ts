import { secret_minus_scanning_minus_location_minus_commit } from "./secret_minus_scanning_minus_location_minus_commit";
import { secret_minus_scanning_minus_location_minus_wiki_minus_commit } from "./secret_minus_scanning_minus_location_minus_wiki_minus_commit";
import { secret_minus_scanning_minus_location_minus_issue_minus_title } from "./secret_minus_scanning_minus_location_minus_issue_minus_title";
import { secret_minus_scanning_minus_location_minus_issue_minus_body } from "./secret_minus_scanning_minus_location_minus_issue_minus_body";
import { secret_minus_scanning_minus_location_minus_issue_minus_comment } from "./secret_minus_scanning_minus_location_minus_issue_minus_comment";
import { secret_minus_scanning_minus_location_minus_discussion_minus_title } from "./secret_minus_scanning_minus_location_minus_discussion_minus_title";
import { secret_minus_scanning_minus_location_minus_discussion_minus_body } from "./secret_minus_scanning_minus_location_minus_discussion_minus_body";
import { secret_minus_scanning_minus_location_minus_discussion_minus_comment } from "./secret_minus_scanning_minus_location_minus_discussion_minus_comment";
import { secret_minus_scanning_minus_location_minus_pull_minus_request_minus_title } from "./secret_minus_scanning_minus_location_minus_pull_minus_request_minus_title";
import { secret_minus_scanning_minus_location_minus_pull_minus_request_minus_body } from "./secret_minus_scanning_minus_location_minus_pull_minus_request_minus_body";
import { secret_minus_scanning_minus_location_minus_pull_minus_request_minus_comment } from "./secret_minus_scanning_minus_location_minus_pull_minus_request_minus_comment";
import { secret_minus_scanning_minus_location_minus_pull_minus_request_minus_review } from "./secret_minus_scanning_minus_location_minus_pull_minus_request_minus_review";
import { secret_minus_scanning_minus_location_minus_pull_minus_request_minus_review_minus_comment } from "./secret_minus_scanning_minus_location_minus_pull_minus_request_minus_review_minus_comment";

export type secret_minus_scanning_minus_location = {
  /**
   * The location type. Because secrets may be found in different types of resources (ie. code, comments, issues, pull requests, discussions), this field identifies the type of resource where the secret was found.
   */
  type?:
    | "commit"
    | "wiki_commit"
    | "issue_title"
    | "issue_body"
    | "issue_comment"
    | "discussion_title"
    | "discussion_body"
    | "discussion_comment"
    | "pull_request_title"
    | "pull_request_body"
    | "pull_request_comment"
    | "pull_request_review"
    | "pull_request_review_comment";
  details?:
    | secret_minus_scanning_minus_location_minus_commit
    | secret_minus_scanning_minus_location_minus_wiki_minus_commit
    | secret_minus_scanning_minus_location_minus_issue_minus_title
    | secret_minus_scanning_minus_location_minus_issue_minus_body
    | secret_minus_scanning_minus_location_minus_issue_minus_comment
    | secret_minus_scanning_minus_location_minus_discussion_minus_title
    | secret_minus_scanning_minus_location_minus_discussion_minus_body
    | secret_minus_scanning_minus_location_minus_discussion_minus_comment
    | secret_minus_scanning_minus_location_minus_pull_minus_request_minus_title
    | secret_minus_scanning_minus_location_minus_pull_minus_request_minus_body
    | secret_minus_scanning_minus_location_minus_pull_minus_request_minus_comment
    | secret_minus_scanning_minus_location_minus_pull_minus_request_minus_review
    | secret_minus_scanning_minus_location_minus_pull_minus_request_minus_review_minus_comment;
};
