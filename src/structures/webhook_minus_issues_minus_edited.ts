import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_label } from "./webhooks_label";

/**
 * @title issues edited event
 */
export type webhook_minus_issues_minus_edited = {
  action: "edited";
  /**
   * The changes to the issue.
   */
  changes: {
    body?: {
      /**
       * The previous version of the body.
       */
      from: string;
    };
    title?: {
      /**
       * The previous version of the title.
       */
      from: string;
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  /**
   * The [issue](https://docs.github.com/rest/issues/issues#get-an-issue) itself.
   *
   * @title Issue
   */
  issue: {
    active_lock_reason: "resolved" | "off-topic" | "too heated" | "spam" | null;
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
    assignees: ({
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
    } | null)[];
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
     * Contents of the issue
     */
    body: string | null;
    closed_at: (string & tags.Format<"date-time">) | null;
    comments: number & tags.Type<"int32">;
    comments_url: string & tags.Format<"uri">;
    created_at: string & tags.Format<"date-time">;
    draft?: boolean;
    events_url: string & tags.Format<"uri">;
    html_url: string & tags.Format<"uri">;
    id: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "int64";
      }>;
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
    labels_url: string & tags.Format<"uri-template">;
    locked?: boolean;
    /**
     * A collection of related issues and pull requests.
     *
     * @title Milestone
     */
    milestone: {
      closed_at: (string & tags.Format<"date-time">) | null;
      closed_issues: number & tags.Type<"int32">;
      created_at: string & tags.Format<"date-time">;
      /**
       * @title User
       */
      creator: {
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
      description: string | null;
      due_on: (string & tags.Format<"date-time">) | null;
      html_url: string & tags.Format<"uri">;
      id: number & tags.Type<"int32">;
      labels_url: string & tags.Format<"uri">;
      node_id: string;
      /**
       * The number of the milestone.
       */
      number: number & tags.Type<"int32">;
      open_issues: number & tags.Type<"int32">;
      /**
       * The state of the milestone.
       */
      state: "open" | "closed";
      /**
       * The title of the milestone.
       */
      title: string;
      updated_at: string & tags.Format<"date-time">;
      url: string & tags.Format<"uri">;
    } | null;
    node_id: string;
    number: number & tags.Type<"int32">;
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     *
     * @title App
     */
    performed_via_github_app?: {
      created_at: (string & tags.Format<"date-time">) | null;
      description: string | null;
      /**
       * The list of events for the GitHub app
       */
      events?: (
        | "branch_protection_rule"
        | "check_run"
        | "check_suite"
        | "code_scanning_alert"
        | "commit_comment"
        | "content_reference"
        | "create"
        | "delete"
        | "deployment"
        | "deployment_review"
        | "deployment_status"
        | "deploy_key"
        | "discussion"
        | "discussion_comment"
        | "fork"
        | "gollum"
        | "issues"
        | "issue_comment"
        | "label"
        | "member"
        | "membership"
        | "milestone"
        | "organization"
        | "org_block"
        | "page_build"
        | "project"
        | "project_card"
        | "project_column"
        | "public"
        | "pull_request"
        | "pull_request_review"
        | "pull_request_review_comment"
        | "push"
        | "registry_package"
        | "release"
        | "repository"
        | "repository_dispatch"
        | "secret_scanning_alert"
        | "star"
        | "status"
        | "team"
        | "team_add"
        | "watch"
        | "workflow_dispatch"
        | "workflow_run"
        | "security_and_analysis"
        | "pull_request_review_thread"
        | "reminder"
      )[];
      external_url: (string & tags.Format<"uri">) | null;
      html_url: string & tags.Format<"uri">;
      /**
       * Unique identifier of the GitHub app
       */
      id: (number & tags.Type<"int32">) | null;
      /**
       * The name of the GitHub app
       */
      name: string;
      node_id: string;
      /**
       * @title User
       */
      owner: {
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
      /**
       * The set of permissions for the GitHub app
       */
      permissions?: {
        actions?: "read" | "write";
        administration?: "read" | "write";
        checks?: "read" | "write";
        content_references?: "read" | "write";
        contents?: "read" | "write";
        deployments?: "read" | "write";
        discussions?: "read" | "write";
        emails?: "read" | "write";
        environments?: "read" | "write";
        issues?: "read" | "write";
        keys?: "read" | "write";
        members?: "read" | "write";
        metadata?: "read" | "write";
        organization_administration?: "read" | "write";
        organization_hooks?: "read" | "write";
        organization_packages?: "read" | "write";
        organization_plan?: "read" | "write";
        organization_projects?: "read" | "write" | "admin";
        organization_secrets?: "read" | "write";
        organization_self_hosted_runners?: "read" | "write";
        organization_user_blocking?: "read" | "write";
        packages?: "read" | "write";
        pages?: "read" | "write";
        pull_requests?: "read" | "write";
        repository_hooks?: "read" | "write";
        repository_projects?: "read" | "write";
        secret_scanning_alerts?: "read" | "write";
        secrets?: "read" | "write";
        security_events?: "read" | "write";
        security_scanning_alert?: "read" | "write";
        single_file?: "read" | "write";
        statuses?: "read" | "write";
        team_discussions?: "read" | "write";
        vulnerability_alerts?: "read" | "write";
        workflows?: "read" | "write";
      };
      /**
       * The slug name of the GitHub app
       */
      slug?: string;
      updated_at: (string & tags.Format<"date-time">) | null;
    } | null;
    pull_request?: {
      diff_url?: string & tags.Format<"uri">;
      html_url?: string & tags.Format<"uri">;
      merged_at?: (string & tags.Format<"date-time">) | null;
      patch_url?: string & tags.Format<"uri">;
      url?: string & tags.Format<"uri">;
    };
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
    repository_url: string & tags.Format<"uri">;
    /**
     * State of the issue; either 'open' or 'closed'
     */
    state?: "open" | "closed";
    state_reason?: string | null;
    timeline_url?: string & tags.Format<"uri">;
    /**
     * Title of the issue
     */
    title: string;
    updated_at: string & tags.Format<"date-time">;
    /**
     * URL for the issue
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
  label?: webhooks_label;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
