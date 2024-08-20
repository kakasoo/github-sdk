import { tags } from "typia";

import { integration } from "./integration";

/**
 * The [comment](https://docs.github.com/rest/issues/comments#get-an-issue-comment) itself.
 *
 * @title issue comment
 */
export type webhooks_issue_comment = {
  /**
   * How the author is associated with the repository.
   *
   * @title AuthorAssociation
   */
  author_association:
    | "COLLABORATOR"
    | "CONTRIBUTOR"
    | "FIRST_TIMER"
    | "FIRST_TIME_CONTRIBUTOR"
    | "MANNEQUIN"
    | "MEMBER"
    | "NONE"
    | "OWNER";
  /**
   * Contents of the issue comment
   */
  body: string;
  created_at: string & tags.Format<"date-time">;
  html_url: string & tags.Format<"uri">;
  /**
   * Unique identifier of the issue comment
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  issue_url: string & tags.Format<"uri">;
  node_id: string;
  performed_via_github_app: integration;
  /**
   * @title Reactions
   */
  reactions: {
    "+1": number & tags.Type<"int32">;
    "-1": number & tags.Type<"int32">;
    confused: number & tags.Type<"int32">;
    eyes: number & tags.Type<"int32">;
    heart: number & tags.Type<"int32">;
    hooray: number & tags.Type<"int32">;
    laugh: number & tags.Type<"int32">;
    rocket: number & tags.Type<"int32">;
    total_count: number & tags.Type<"int32">;
    url: string & tags.Format<"uri">;
  };
  updated_at: string & tags.Format<"date-time">;
  /**
   * URL for the issue comment
   */
  url: string & tags.Format<"uri">;
  /**
   * @title User
   */
  user: {
    avatar_url?: string & tags.Format<"uri">;
    deleted?: boolean;
    email?: string | null;
    events_url?: string & tags.Format<"uri-template">;
    followers_url?: string & tags.Format<"uri">;
    following_url?: string & tags.Format<"uri-template">;
    gists_url?: string & tags.Format<"uri-template">;
    gravatar_id?: string;
    html_url?: string & tags.Format<"uri">;
    id: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "int64";
      }>;
    login: string;
    name?: string;
    node_id?: string;
    organizations_url?: string & tags.Format<"uri">;
    received_events_url?: string & tags.Format<"uri">;
    repos_url?: string & tags.Format<"uri">;
    site_admin?: boolean;
    starred_url?: string & tags.Format<"uri-template">;
    subscriptions_url?: string & tags.Format<"uri">;
    type?: "Bot" | "User" | "Organization" | "Mannequin";
    url?: string & tags.Format<"uri">;
  } | null;
};
