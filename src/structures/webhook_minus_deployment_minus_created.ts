import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_workflow } from "./webhooks_workflow";

/**
 * @title deployment created event
 */
export type webhook_minus_deployment_minus_created = {
  action: "created";
  /**
   * The [deployment](https://docs.github.com/rest/deployments/deployments#list-deployments).
   *
   * @title Deployment
   */
  deployment: {
    created_at: string;
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
      type?: "Bot" | "User" | "Organization";
      url?: string & tags.Format<"uri">;
    } | null;
    description: string | null;
    environment: string;
    id: number & tags.Type<"int32">;
    node_id: string;
    original_environment: string;
    payload: {} | string;
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
        | "workflow_job"
        | "pull_request_review_thread"
        | "merge_queue_entry"
        | "secret_scanning_alert_location"
        | "merge_group"
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
        organization_projects?: "read" | "write";
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
    production_environment?: boolean;
    ref: string;
    repository_url: string & tags.Format<"uri">;
    sha: string;
    statuses_url: string & tags.Format<"uri">;
    task: string;
    transient_environment?: boolean;
    updated_at: string;
    url: string & tags.Format<"uri">;
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
  workflow: webhooks_workflow;
  /**
   * @title Deployment Workflow Run
   */
  workflow_run: {
    /**
     * @title User
     */
    actor: {
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
    artifacts_url?: string;
    cancel_url?: string;
    check_suite_id: number & tags.Type<"int32">;
    check_suite_node_id: string;
    check_suite_url?: string;
    conclusion:
      | "success"
      | "failure"
      | "neutral"
      | "cancelled"
      | "timed_out"
      | "action_required"
      | "stale"
      | null;
    created_at: string & tags.Format<"date-time">;
    display_title: string;
    event: string;
    head_branch: string;
    head_commit?: any | null;
    head_repository?: {
      archive_url?: string;
      assignees_url?: string;
      blobs_url?: string;
      branches_url?: string;
      collaborators_url?: string;
      comments_url?: string;
      commits_url?: string;
      compare_url?: string;
      contents_url?: string;
      contributors_url?: string;
      deployments_url?: string;
      description?: any | null;
      downloads_url?: string;
      events_url?: string;
      fork?: boolean;
      forks_url?: string;
      full_name?: string;
      git_commits_url?: string;
      git_refs_url?: string;
      git_tags_url?: string;
      hooks_url?: string;
      html_url?: string;
      id?: number & tags.Type<"int32">;
      issue_comment_url?: string;
      issue_events_url?: string;
      issues_url?: string;
      keys_url?: string;
      labels_url?: string;
      languages_url?: string;
      merges_url?: string;
      milestones_url?: string;
      name?: string;
      node_id?: string;
      notifications_url?: string;
      owner?: {
        avatar_url?: string;
        events_url?: string;
        followers_url?: string;
        following_url?: string;
        gists_url?: string;
        gravatar_id?: string;
        html_url?: string;
        id?: number & tags.Type<"int32">;
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
      private?: boolean;
      pulls_url?: string;
      releases_url?: string;
      stargazers_url?: string;
      statuses_url?: string;
      subscribers_url?: string;
      subscription_url?: string;
      tags_url?: string;
      teams_url?: string;
      trees_url?: string;
      url?: string;
    };
    head_sha: string;
    html_url: string & tags.Format<"uri">;
    id: number & tags.Type<"int32">;
    jobs_url?: string;
    logs_url?: string;
    name: string;
    node_id: string;
    path: string;
    previous_attempt_url?: any | null;
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
    referenced_workflows?:
      | {
          path: string;
          ref?: string;
          sha: string;
        }[]
      | null;
    repository?: {
      archive_url?: string;
      assignees_url?: string;
      blobs_url?: string;
      branches_url?: string;
      collaborators_url?: string;
      comments_url?: string;
      commits_url?: string;
      compare_url?: string;
      contents_url?: string;
      contributors_url?: string;
      deployments_url?: string;
      description?: any | null;
      downloads_url?: string;
      events_url?: string;
      fork?: boolean;
      forks_url?: string;
      full_name?: string;
      git_commits_url?: string;
      git_refs_url?: string;
      git_tags_url?: string;
      hooks_url?: string;
      html_url?: string;
      id?: number & tags.Type<"int32">;
      issue_comment_url?: string;
      issue_events_url?: string;
      issues_url?: string;
      keys_url?: string;
      labels_url?: string;
      languages_url?: string;
      merges_url?: string;
      milestones_url?: string;
      name?: string;
      node_id?: string;
      notifications_url?: string;
      owner?: {
        avatar_url?: string;
        events_url?: string;
        followers_url?: string;
        following_url?: string;
        gists_url?: string;
        gravatar_id?: string;
        html_url?: string;
        id?: number & tags.Type<"int32">;
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
      private?: boolean;
      pulls_url?: string;
      releases_url?: string;
      stargazers_url?: string;
      statuses_url?: string;
      subscribers_url?: string;
      subscription_url?: string;
      tags_url?: string;
      teams_url?: string;
      trees_url?: string;
      url?: string;
    };
    rerun_url?: string;
    run_attempt: number & tags.Type<"int32">;
    run_number: number & tags.Type<"int32">;
    run_started_at: string & tags.Format<"date-time">;
    status:
      | "requested"
      | "in_progress"
      | "completed"
      | "queued"
      | "waiting"
      | "pending";
    /**
     * @title User
     */
    triggering_actor?: {
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
    updated_at: string & tags.Format<"date-time">;
    url: string & tags.Format<"uri">;
    workflow_id: number & tags.Type<"int32">;
    workflow_url?: string;
  } | null;
};
