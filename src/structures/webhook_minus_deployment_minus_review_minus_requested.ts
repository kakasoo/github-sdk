import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { webhooks_user } from "./webhooks_user";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

export type webhook_minus_deployment_minus_review_minus_requested = {
  action: "requested";
  enterprise?: enterprise_minus_webhooks;
  environment: string;
  installation?: simple_minus_installation;
  organization: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  requestor: webhooks_user;
  reviewers: {
    /**
     * @title User
     */
    reviewer?: {
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
      login?: string;
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
    type?: "User" | "Team";
  }[];
  sender: simple_minus_user_minus_webhooks;
  since: string;
  workflow_job_run: {
    conclusion: any | null;
    created_at: string;
    environment: string;
    html_url: string;
    id: number & tags.Type<"int32">;
    name: string | null;
    status: string;
    updated_at: string;
  };
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
    event: string;
    head_branch: string;
    head_commit?: {} | null;
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
      description?: string | null;
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
    previous_attempt_url?: string | null;
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
      description?: string | null;
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
    triggering_actor: {
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
    display_title: string;
  } | null;
};
