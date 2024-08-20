import { tags } from "typia";

/**
 * The review that was affected.
 */
export type webhooks_review = {
  _links: {
    /**
     * @title Link
     */
    html: {
      href: string & tags.Format<"uri-template">;
    };
    /**
     * @title Link
     */
    pull_request: {
      href: string & tags.Format<"uri-template">;
    };
  };
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
   * The text of the review.
   */
  body: string | null;
  /**
   * A commit SHA for the review.
   */
  commit_id: string;
  html_url: string & tags.Format<"uri">;
  /**
   * Unique identifier of the review
   */
  id: number & tags.Type<"int32">;
  node_id: string;
  pull_request_url: string & tags.Format<"uri">;
  state: string;
  submitted_at: (string & tags.Format<"date-time">) | null;
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
