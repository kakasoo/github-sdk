import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title check_suite requested event
 */
export type webhook_minus_check_minus_suite_minus_requested = {
  action: "requested";
  /**
   * The [check_suite](https://docs.github.com/rest/checks/suites#get-a-check-suite).
   */
  check_suite: {
    after: string | null;
    /**
     * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
     *
     * @title App
     */
    app: {
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
        | "pull_request_review_thread"
        | "workflow_job"
        | "merge_queue_entry"
        | "security_and_analysis"
        | "secret_scanning_alert_location"
        | "projects_v2_item"
        | "merge_group"
        | "repository_import"
      )[];
      external_url: (string & tags.Format<"uri">) | null;
      html_url: string & tags.Format<"uri">;
      /**
       * Unique identifier of the GitHub app
       */
      id: (number & tags.Type<"int32">) | null;
      /**
       * Client ID of the GitHub app
       */
      client_id?: string | null;
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
        repository_projects?: "read" | "write" | "admin";
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
    };
    before: string | null;
    check_runs_url: string & tags.Format<"uri">;
    /**
     * The summary conclusion for all check runs that are part of the check suite. This value will be `null` until the check run has completed.
     */
    conclusion:
      | "success"
      | "failure"
      | "neutral"
      | "cancelled"
      | "timed_out"
      | "action_required"
      | "stale"
      | "skipped"
      | null;
    created_at: string & tags.Format<"date-time">;
    /**
     * The head branch name the changes are on.
     */
    head_branch: string | null;
    /**
     * @title SimpleCommit
     */
    head_commit: {
      /**
       * Metaproperties for Git author/committer information.
       *
       * @title Committer
       */
      author: {
        date?: string & tags.Format<"date-time">;
        email: (string & tags.Format<"email">) | null;
        /**
         * The git author's name.
         */
        name: string;
        username?: string;
      };
      /**
       * Metaproperties for Git author/committer information.
       *
       * @title Committer
       */
      committer: {
        date?: string & tags.Format<"date-time">;
        email: (string & tags.Format<"email">) | null;
        /**
         * The git author's name.
         */
        name: string;
        username?: string;
      };
      id: string;
      message: string;
      timestamp: string;
      tree_id: string;
    };
    /**
     * The SHA of the head commit that is being checked.
     */
    head_sha: string;
    id: number & tags.Type<"int32">;
    latest_check_runs_count: number & tags.Type<"int32">;
    node_id: string;
    /**
     * An array of pull requests that match this check suite. A pull request matches a check suite if they have the same `head_sha` and `head_branch`. When the check suite's `head_branch` is in a forked repository it will be `null` and the `pull_requests` array will be empty.
     */
    pull_requests: {
      base: {
        ref: string;
        /**
         * @title Repo Ref
         */
        repo: {
          id: number & tags.Type<"int32">;
          name: string;
          url: string & tags.Format<"uri">;
        };
        sha: string;
      };
      head: {
        ref: string;
        /**
         * @title Repo Ref
         */
        repo: {
          id: number & tags.Type<"int32">;
          name: string;
          url: string & tags.Format<"uri">;
        };
        sha: string;
      };
      id: number & tags.Type<"int32">;
      number: number & tags.Type<"int32">;
      url: string & tags.Format<"uri">;
    }[];
    rerequestable?: boolean;
    runs_rerequestable?: boolean;
    /**
     * The summary status for all check runs that are part of the check suite. Can be `requested`, `in_progress`, or `completed`.
     */
    status: "requested" | "in_progress" | "completed" | "queued" | null;
    updated_at: string & tags.Format<"date-time">;
    /**
     * URL that points to the check suite API resource.
     */
    url: string & tags.Format<"uri">;
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
