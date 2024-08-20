import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_workflow } from "./webhooks_workflow";

/**
 * @title workflow_run completed event
 */
export type webhook_minus_workflow_minus_run_minus_completed = {
  action: "completed";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
  workflow: webhooks_workflow;
  /**
   * @title Workflow Run
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
    artifacts_url: string & tags.Format<"uri">;
    cancel_url: string & tags.Format<"uri">;
    check_suite_id: number & tags.Type<"int32">;
    check_suite_node_id: string;
    check_suite_url: string & tags.Format<"uri">;
    conclusion:
      | "action_required"
      | "cancelled"
      | "failure"
      | "neutral"
      | "skipped"
      | "stale"
      | "success"
      | "timed_out"
      | null;
    created_at: string & tags.Format<"date-time">;
    event: string;
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
     * @title Repository Lite
     */
    head_repository: {
      archive_url: string & tags.Format<"uri-template">;
      assignees_url: string & tags.Format<"uri-template">;
      blobs_url: string & tags.Format<"uri-template">;
      branches_url: string & tags.Format<"uri-template">;
      collaborators_url: string & tags.Format<"uri-template">;
      comments_url: string & tags.Format<"uri-template">;
      commits_url: string & tags.Format<"uri-template">;
      compare_url: string & tags.Format<"uri-template">;
      contents_url: string & tags.Format<"uri-template">;
      contributors_url: string & tags.Format<"uri">;
      deployments_url: string & tags.Format<"uri">;
      description: string | null;
      downloads_url: string & tags.Format<"uri">;
      events_url: string & tags.Format<"uri">;
      fork: boolean;
      forks_url: string & tags.Format<"uri">;
      full_name: string;
      git_commits_url: string & tags.Format<"uri-template">;
      git_refs_url: string & tags.Format<"uri-template">;
      git_tags_url: string & tags.Format<"uri-template">;
      hooks_url: string & tags.Format<"uri">;
      html_url: string & tags.Format<"uri">;
      /**
       * Unique identifier of the repository
       */
      id: number & tags.Type<"int32">;
      issue_comment_url: string & tags.Format<"uri-template">;
      issue_events_url: string & tags.Format<"uri-template">;
      issues_url: string & tags.Format<"uri-template">;
      keys_url: string & tags.Format<"uri-template">;
      labels_url: string & tags.Format<"uri-template">;
      languages_url: string & tags.Format<"uri">;
      merges_url: string & tags.Format<"uri">;
      milestones_url: string & tags.Format<"uri-template">;
      /**
       * The name of the repository.
       */
      name: string;
      node_id: string;
      notifications_url: string & tags.Format<"uri-template">;
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
       * Whether the repository is private or public.
       */
      private: boolean;
      pulls_url: string & tags.Format<"uri-template">;
      releases_url: string & tags.Format<"uri-template">;
      stargazers_url: string & tags.Format<"uri">;
      statuses_url: string & tags.Format<"uri-template">;
      subscribers_url: string & tags.Format<"uri">;
      subscription_url: string & tags.Format<"uri">;
      tags_url: string & tags.Format<"uri">;
      teams_url: string & tags.Format<"uri">;
      trees_url: string & tags.Format<"uri-template">;
      url: string & tags.Format<"uri">;
    };
    head_sha: string;
    html_url: string & tags.Format<"uri">;
    id: number & tags.Type<"int32">;
    jobs_url: string & tags.Format<"uri">;
    logs_url: string & tags.Format<"uri">;
    name: string | null;
    node_id: string;
    path: string;
    previous_attempt_url: (string & tags.Format<"uri">) | null;
    pull_requests: ({
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
      id: number;
      number: number;
      url: string & tags.Format<"uri">;
    } | null)[];
    referenced_workflows?:
      | {
          path: string;
          ref?: string;
          sha: string;
        }[]
      | null;
    /**
     * @title Repository Lite
     */
    repository: {
      archive_url: string & tags.Format<"uri-template">;
      assignees_url: string & tags.Format<"uri-template">;
      blobs_url: string & tags.Format<"uri-template">;
      branches_url: string & tags.Format<"uri-template">;
      collaborators_url: string & tags.Format<"uri-template">;
      comments_url: string & tags.Format<"uri-template">;
      commits_url: string & tags.Format<"uri-template">;
      compare_url: string & tags.Format<"uri-template">;
      contents_url: string & tags.Format<"uri-template">;
      contributors_url: string & tags.Format<"uri">;
      deployments_url: string & tags.Format<"uri">;
      description: string | null;
      downloads_url: string & tags.Format<"uri">;
      events_url: string & tags.Format<"uri">;
      fork: boolean;
      forks_url: string & tags.Format<"uri">;
      full_name: string;
      git_commits_url: string & tags.Format<"uri-template">;
      git_refs_url: string & tags.Format<"uri-template">;
      git_tags_url: string & tags.Format<"uri-template">;
      hooks_url: string & tags.Format<"uri">;
      html_url: string & tags.Format<"uri">;
      /**
       * Unique identifier of the repository
       */
      id: number & tags.Type<"int32">;
      issue_comment_url: string & tags.Format<"uri-template">;
      issue_events_url: string & tags.Format<"uri-template">;
      issues_url: string & tags.Format<"uri-template">;
      keys_url: string & tags.Format<"uri-template">;
      labels_url: string & tags.Format<"uri-template">;
      languages_url: string & tags.Format<"uri">;
      merges_url: string & tags.Format<"uri">;
      milestones_url: string & tags.Format<"uri-template">;
      /**
       * The name of the repository.
       */
      name: string;
      node_id: string;
      notifications_url: string & tags.Format<"uri-template">;
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
       * Whether the repository is private or public.
       */
      private: boolean;
      pulls_url: string & tags.Format<"uri-template">;
      releases_url: string & tags.Format<"uri-template">;
      stargazers_url: string & tags.Format<"uri">;
      statuses_url: string & tags.Format<"uri-template">;
      subscribers_url: string & tags.Format<"uri">;
      subscription_url: string & tags.Format<"uri">;
      tags_url: string & tags.Format<"uri">;
      teams_url: string & tags.Format<"uri">;
      trees_url: string & tags.Format<"uri-template">;
      url: string & tags.Format<"uri">;
    };
    rerun_url: string & tags.Format<"uri">;
    run_attempt: number & tags.Type<"int32">;
    run_number: number & tags.Type<"int32">;
    run_started_at: string & tags.Format<"date-time">;
    status:
      | "requested"
      | "in_progress"
      | "completed"
      | "queued"
      | "pending"
      | "waiting";
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
    workflow_url: string & tags.Format<"uri">;
    /**
     * The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow.
     */
    display_title?: string &
      tags.JsonSchemaPlugin<{
        example: "Simple Workflow";
      }>;
  };
};
