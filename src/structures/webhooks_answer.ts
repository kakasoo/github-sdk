import { tags } from "typia";

export type webhooks_answer = {
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
  body: string;
  child_comment_count: number & tags.Type<"int32">;
  created_at: string & tags.Format<"date-time">;
  discussion_id: number & tags.Type<"int32">;
  html_url: string;
  id: number & tags.Type<"int32">;
  node_id: string;
  parent_id: any | null;
  /**
   * @title Reactions
   */
  reactions?: {
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
  repository_url: string;
  updated_at: string & tags.Format<"date-time">;
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
    type?: "Bot" | "User" | "Organization";
    url?: string & tags.Format<"uri">;
  } | null;
};
