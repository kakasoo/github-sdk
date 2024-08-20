import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { webhooks_issue_2 } from "./webhooks_issue_2";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title issues transferred event
 */
export type webhook_minus_issues_minus_transferred = {
  action: "transferred";
  changes: {
    /**
     * The [issue](https://docs.github.com/rest/issues/issues#get-an-issue) itself.
     *
     * @title Issue
     */
    new_issue: {
      active_lock_reason:
        | "resolved"
        | "off-topic"
        | "too heated"
        | "spam"
        | null;
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
        type?: "Bot" | "User" | "Organization";
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
        type?: "Bot" | "User" | "Organization";
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
          type?: "Bot" | "User" | "Organization";
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
        type?: "Bot" | "User" | "Organization";
        url?: string & tags.Format<"uri">;
      } | null;
    };
    /**
     * A git repository
     *
     * @title Repository
     */
    new_repository: {
      /**
       * Whether to allow auto-merge for pull requests.
       */
      allow_auto_merge?: boolean;
      /**
       * Whether to allow private forks
       */
      allow_forking?: boolean;
      /**
       * Whether to allow merge commits for pull requests.
       */
      allow_merge_commit?: boolean;
      /**
       * Whether to allow rebase merges for pull requests.
       */
      allow_rebase_merge?: boolean;
      /**
       * Whether to allow squash merges for pull requests.
       */
      allow_squash_merge?: boolean;
      allow_update_branch?: boolean;
      archive_url: string & tags.Format<"uri-template">;
      /**
       * Whether the repository is archived.
       */
      archived: boolean;
      assignees_url: string & tags.Format<"uri-template">;
      blobs_url: string & tags.Format<"uri-template">;
      branches_url: string & tags.Format<"uri-template">;
      clone_url: string & tags.Format<"uri">;
      collaborators_url: string & tags.Format<"uri-template">;
      comments_url: string & tags.Format<"uri-template">;
      commits_url: string & tags.Format<"uri-template">;
      compare_url: string & tags.Format<"uri-template">;
      contents_url: string & tags.Format<"uri-template">;
      contributors_url: string & tags.Format<"uri">;
      created_at:
        | (number & tags.Type<"int32">)
        | (string & tags.Format<"date-time">);
      /**
       * The custom properties that were defined for the repository. The keys are the custom property names, and the values are the corresponding custom property values.
       */
      custom_properties?: {};
      /**
       * The default branch of the repository.
       */
      default_branch: string;
      /**
       * Whether to delete head branches when pull requests are merged
       */
      delete_branch_on_merge?: boolean;
      deployments_url: string & tags.Format<"uri">;
      description: string | null;
      /**
       * Returns whether or not this repository is disabled.
       */
      disabled?: boolean;
      downloads_url: string & tags.Format<"uri">;
      events_url: string & tags.Format<"uri">;
      fork: boolean;
      forks: number & tags.Type<"int32">;
      forks_count: number & tags.Type<"int32">;
      forks_url: string & tags.Format<"uri">;
      full_name: string;
      git_commits_url: string & tags.Format<"uri-template">;
      git_refs_url: string & tags.Format<"uri-template">;
      git_tags_url: string & tags.Format<"uri-template">;
      git_url: string & tags.Format<"uri">;
      /**
       * Whether downloads are enabled.
       */
      has_downloads: boolean;
      /**
       * Whether issues are enabled.
       */
      has_issues: boolean;
      has_pages: boolean;
      /**
       * Whether projects are enabled.
       */
      has_projects: boolean;
      /**
       * Whether the wiki is enabled.
       */
      has_wiki: boolean;
      /**
       * Whether discussions are enabled.
       */
      has_discussions: boolean;
      homepage: string | null;
      hooks_url: string & tags.Format<"uri">;
      html_url: string & tags.Format<"uri">;
      /**
       * Unique identifier of the repository
       */
      id: number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          format: "int64";
        }>;
      is_template?: boolean;
      issue_comment_url: string & tags.Format<"uri-template">;
      issue_events_url: string & tags.Format<"uri-template">;
      issues_url: string & tags.Format<"uri-template">;
      keys_url: string & tags.Format<"uri-template">;
      labels_url: string & tags.Format<"uri-template">;
      language: string | null;
      languages_url: string & tags.Format<"uri">;
      /**
       * @title License
       */
      license: {
        key: string;
        name: string;
        node_id: string;
        spdx_id: string;
        url: (string & tags.Format<"uri">) | null;
      } | null;
      master_branch?: string;
      merges_url: string & tags.Format<"uri">;
      milestones_url: string & tags.Format<"uri-template">;
      mirror_url: (string & tags.Format<"uri">) | null;
      /**
       * The name of the repository.
       */
      name: string;
      node_id: string;
      notifications_url: string & tags.Format<"uri-template">;
      open_issues: number & tags.Type<"int32">;
      open_issues_count: number & tags.Type<"int32">;
      organization?: string;
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
      permissions?: {
        admin: boolean;
        maintain?: boolean;
        pull: boolean;
        push: boolean;
        triage?: boolean;
      };
      /**
       * Whether the repository is private or public.
       */
      private: boolean;
      public?: boolean;
      pulls_url: string & tags.Format<"uri-template">;
      pushed_at:
        | (number & tags.Type<"int32">)
        | (string & tags.Format<"date-time">)
        | null;
      releases_url: string & tags.Format<"uri-template">;
      role_name?: string | null;
      size: number & tags.Type<"int32">;
      ssh_url: string;
      stargazers?: number & tags.Type<"int32">;
      stargazers_count: number & tags.Type<"int32">;
      stargazers_url: string & tags.Format<"uri">;
      statuses_url: string & tags.Format<"uri-template">;
      subscribers_url: string & tags.Format<"uri">;
      subscription_url: string & tags.Format<"uri">;
      svn_url: string & tags.Format<"uri">;
      tags_url: string & tags.Format<"uri">;
      teams_url: string & tags.Format<"uri">;
      topics: string[];
      trees_url: string & tags.Format<"uri-template">;
      updated_at: string & tags.Format<"date-time">;
      url: string & tags.Format<"uri">;
      visibility: "public" | "private" | "internal";
      watchers: number & tags.Type<"int32">;
      watchers_count: number & tags.Type<"int32">;
      /**
       * Whether to require contributors to sign off on web-based commits
       */
      web_commit_signoff_required?: boolean;
    };
  };
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  issue: webhooks_issue_2;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
