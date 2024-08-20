import { tags } from "typia";

import { webhooks_changes } from "./webhooks_changes";
import { webhooks_issue_comment } from "./webhooks_issue_comment";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title issue_comment edited event
 */
export type webhook_minus_issue_minus_comment_minus_edited = {
  action: "edited";
  changes: webhooks_changes;
  comment: webhooks_issue_comment;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  /**
   * The [issue](https://docs.github.com/rest/issues/issues#get-an-issue) the comment belongs to.
   */
  issue: {
    active_lock_reason?: string | null;
    /**
     * @title User
     */
    assignee?: {
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
      type?: "Bot" | "User" | "Organization" | "Mannequin";
      url?: string & tags.Format<"uri">;
    } | null;
    assignees?: ({} | null)[];
    author_association?: string;
    body?: string | null;
    closed_at?: string | null;
    comments?: number & tags.Type<"int32">;
    comments_url?: string;
    created_at?: string;
    draft?: boolean;
    events_url?: string;
    html_url?: string;
    id?: number & tags.Type<"int32">;
    labels?: {
      /**
       * 6-character hex code, without the leading #, identifying the color
       */
      color: string;
      default: boolean;
      description: string | null;
      id: number & tags.Type<"int32">;
      /**
       * The name of the label.
       */
      name: string;
      node_id: string;
      /**
       * URL for the label
       */
      url: string & tags.Format<"uri">;
    }[];
    labels_url?: string;
    locked?: boolean;
    milestone?: {} | null;
    node_id?: string;
    number?: number & tags.Type<"int32">;
    performed_via_github_app?: {} | null;
    pull_request?: {
      diff_url?: string & tags.Format<"uri">;
      html_url?: string & tags.Format<"uri">;
      merged_at?: (string & tags.Format<"date-time">) | null;
      patch_url?: string & tags.Format<"uri">;
      url?: string & tags.Format<"uri">;
    };
    reactions?: {
      "+1"?: number & tags.Type<"int32">;
      "-1"?: number & tags.Type<"int32">;
      confused?: number & tags.Type<"int32">;
      eyes?: number & tags.Type<"int32">;
      heart?: number & tags.Type<"int32">;
      hooray?: number & tags.Type<"int32">;
      laugh?: number & tags.Type<"int32">;
      rocket?: number & tags.Type<"int32">;
      total_count?: number & tags.Type<"int32">;
      url?: string;
    };
    repository_url?: string;
    /**
     * State of the issue; either 'open' or 'closed'
     */
    state?: "open" | "closed";
    state_reason?: string | null;
    timeline_url?: string;
    title?: string;
    updated_at?: string;
    url?: string;
    user?: {
      avatar_url?: string;
      events_url?: string;
      followers_url?: string;
      following_url?: string;
      gists_url?: string;
      gravatar_id?: string;
      html_url?: string;
      id?: number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          format: "int64";
        }>;
      login?: string;
      node_id?: string;
      organizations_url?: string;
      received_events_url?: string;
      repos_url?: string;
      site_admin?: boolean;
      starred_url?: string;
      subscriptions_url?: string;
      type?: string;
      url?: string;
    };
  };
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
