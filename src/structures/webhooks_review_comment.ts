import { tags } from "typia";

/**
 * The [comment](https://docs.github.com/rest/pulls/comments#get-a-review-comment-for-a-pull-request) itself.
 *
 * @title Pull Request Review Comment
 */
export type webhooks_review_comment = {
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
    /**
     * @title Link
     */
    self: {
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
   * The text of the comment.
   */
  body: string;
  /**
   * The SHA of the commit to which the comment applies.
   */
  commit_id: string;
  created_at: string & tags.Format<"date-time">;
  /**
   * The diff of the line that the comment refers to.
   */
  diff_hunk: string;
  /**
   * HTML URL for the pull request review comment.
   */
  html_url: string & tags.Format<"uri">;
  /**
   * The ID of the pull request review comment.
   */
  id: number & tags.Type<"int32">;
  /**
   * The comment ID to reply to.
   */
  in_reply_to_id?: number & tags.Type<"int32">;
  /**
   * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
   */
  line: (number & tags.Type<"int32">) | null;
  /**
   * The node ID of the pull request review comment.
   */
  node_id: string;
  /**
   * The SHA of the original commit to which the comment applies.
   */
  original_commit_id: string;
  /**
   * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
   */
  original_line: number & tags.Type<"int32">;
  /**
   * The index of the original line in the diff to which the comment applies.
   */
  original_position: number & tags.Type<"int32">;
  /**
   * The first line of the range for a multi-line comment.
   */
  original_start_line: (number & tags.Type<"int32">) | null;
  /**
   * The relative path of the file to which the comment applies.
   */
  path: string;
  /**
   * The line index in the diff to which the comment applies.
   */
  position: (number & tags.Type<"int32">) | null;
  /**
   * The ID of the pull request review to which the comment belongs.
   */
  pull_request_review_id: (number & tags.Type<"int32">) | null;
  /**
   * URL for the pull request that the review comment belongs to.
   */
  pull_request_url: string & tags.Format<"uri">;
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
  /**
   * The side of the first line of the range for a multi-line comment.
   */
  side: "LEFT" | "RIGHT";
  /**
   * The first line of the range for a multi-line comment.
   */
  start_line: (number & tags.Type<"int32">) | null;
  /**
   * The side of the first line of the range for a multi-line comment.
   */
  start_side: "LEFT" | "RIGHT" | null;
  /**
   * The level at which the comment is targeted, can be a diff line or a file.
   */
  subject_type?: "line" | "file";
  updated_at: string & tags.Format<"date-time">;
  /**
   * URL for the pull request review comment
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
    type?: "Bot" | "User" | "Organization";
    url?: string & tags.Format<"uri">;
  } | null;
};
