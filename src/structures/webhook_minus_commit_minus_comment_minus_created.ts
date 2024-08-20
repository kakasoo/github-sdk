import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title commit_comment created event
 */
export type webhook_minus_commit_minus_comment_minus_created = {
  /**
   * The action performed. Can be `created`.
   */
  action: "created";
  /**
   * The [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment) resource.
   */
  comment: {
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
    created_at: string;
    html_url: string & tags.Format<"uri">;
    /**
     * The ID of the commit comment.
     */
    id: number & tags.Type<"int32">;
    /**
     * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
     */
    line: (number & tags.Type<"int32">) | null;
    /**
     * The node ID of the commit comment.
     */
    node_id: string;
    /**
     * The relative path of the file to which the comment applies.
     */
    path: string | null;
    /**
     * The line index in the diff to which the comment applies.
     */
    position: (number & tags.Type<"int32">) | null;
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
    updated_at: string;
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
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
