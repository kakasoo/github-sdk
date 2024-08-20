import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { nullable_minus_issue } from "./nullable_minus_issue";
import { issue_minus_event_minus_label } from "./issue_minus_event_minus_label";
import { team } from "./team";
import { issue_minus_event_minus_dismissed_minus_review } from "./issue_minus_event_minus_dismissed_minus_review";
import { issue_minus_event_minus_milestone } from "./issue_minus_event_minus_milestone";
import { issue_minus_event_minus_project_minus_card } from "./issue_minus_event_minus_project_minus_card";
import { issue_minus_event_minus_rename } from "./issue_minus_event_minus_rename";
import { author_minus_association } from "./author_minus_association";
import { nullable_minus_integration } from "./nullable_minus_integration";

/**
 * Issue Event
 *
 * @title Issue Event
 */
export type issue_minus_event = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
      example: 1;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDEwOklzc3VlRXZlbnQx";
    }>;
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/issues/events/1";
    }>;
  actor: nullable_minus_simple_minus_user;
  event: string &
    tags.JsonSchemaPlugin<{
      example: "closed";
    }>;
  commit_id:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "6dcb09b5b57875f334f61aebed695e2e4193db5e";
        }>)
    | null;
  commit_url:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e";
        }>)
    | null;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-04-14T16:00:49Z";
    }>;
  issue?: nullable_minus_issue;
  label?: issue_minus_event_minus_label;
  assignee?: nullable_minus_simple_minus_user;
  assigner?: nullable_minus_simple_minus_user;
  review_requester?: nullable_minus_simple_minus_user;
  requested_reviewer?: nullable_minus_simple_minus_user;
  requested_team?: team;
  dismissed_review?: issue_minus_event_minus_dismissed_minus_review;
  milestone?: issue_minus_event_minus_milestone;
  project_card?: issue_minus_event_minus_project_minus_card;
  rename?: issue_minus_event_minus_rename;
  author_association?: author_minus_association;
  lock_reason?: string | null;
  performed_via_github_app?: nullable_minus_integration;
};
