import { tags } from "typia";

import { label } from "./label";

/**
 * A Discussion in a repository.
 *
 * @title Discussion
 */
export type discussion = {
  active_lock_reason: string | null;
  answer_chosen_at: string | null;
  /**
   * @title User
   */
  answer_chosen_by: {
    avatar_url?: string & tags.Format<"uri">;
    deleted?: boolean;
    email?: string | null;
    events_url?: string & tags.Format<"uri-template">;
    followers_url?: string & tags.Format<"uri">;
    following_url?: string & tags.Format<"uri-template">;
    gists_url?: string & tags.Format<"uri-template">;
    gravatar_id?: string;
    html_url?: string & tags.Format<"uri">;
    id: number & tags.Type<"int32">;
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
  answer_html_url: string | null;
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
  category: {
    created_at: string & tags.Format<"date-time">;
    description: string;
    emoji: string;
    id: number & tags.Type<"int32">;
    is_answerable: boolean;
    name: string;
    node_id?: string;
    repository_id: number & tags.Type<"int32">;
    slug: string;
    updated_at: string;
  };
  comments: number & tags.Type<"int32">;
  created_at: string & tags.Format<"date-time">;
  html_url: string;
  id: number & tags.Type<"int32">;
  locked: boolean;
  node_id: string;
  number: number & tags.Type<"int32">;
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
  /**
   * The current state of the discussion.
   * `converting` means that the discussion is being converted from an issue.
   * `transferring` means that the discussion is being transferred from another repository.
   */
  state: "open" | "closed" | "locked" | "converting" | "transferring";
  /**
   * The reason for the current state
   */
  state_reason: "resolved" | "outdated" | "duplicate" | "reopened" | null;
  timeline_url?: string;
  title: string;
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
  labels?: label[];
};
