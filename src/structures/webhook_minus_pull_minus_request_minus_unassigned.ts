import { tags } from "typia";

import { webhooks_user_mannequin } from "./webhooks_user_mannequin";
import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { webhooks_number } from "./webhooks_number";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * @title pull_request unassigned event
 */
export type webhook_minus_pull_minus_request_minus_unassigned = {
  action: "unassigned";
  assignee?: webhooks_user_mannequin;
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  number: webhooks_number;
  organization?: organization_minus_simple_minus_webhooks;
  /**
   * @title Pull Request
   */
  pull_request: {
    _links: {
      /**
       * @title Link
       */
      comments: {
        href: string & tags.Format<"uri-template">;
      };
      /**
       * @title Link
       */
      commits: {
        href: string & tags.Format<"uri-template">;
      };
      /**
       * @title Link
       */
      html: {
        href: string & tags.Format<"uri-template">;
      };
      /**
       * @title Link
       */
      issue: {
        href: string & tags.Format<"uri-template">;
      };
      /**
       * @title Link
       */
      review_comment: {
        href: string & tags.Format<"uri-template">;
      };
      /**
       * @title Link
       */
      review_comments: {
        href: string & tags.Format<"uri-template">;
      };
      /**
       * @title Link
       */
      self: {
        href: string & tags.Format<"uri-template">;
      };
      /**
       * @title Link
       */
      statuses: {
        href: string & tags.Format<"uri-template">;
      };
    };
    active_lock_reason: "resolved" | "off-topic" | "too heated" | "spam" | null;
    additions?: number & tags.Type<"int32">;
    /**
     * @title User
     */
    assignee: {
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
     * The status of auto merging a pull request.
     *
     * @title PullRequestAutoMerge
     */
    auto_merge: {
      /**
       * Commit message for the merge commit.
       */
      commit_message: string | null;
      /**
       * Title for the merge commit message.
       */
      commit_title: string | null;
      /**
       * @title User
       */
      enabled_by: {
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
       * The merge method to use.
       */
      merge_method: "merge" | "squash" | "rebase";
    } | null;
    base: {
      label: string | null;
      ref: string;
      /**
       * A git repository
       *
       * @title Repository
       */
      repo: {
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
        /**
         * The default value for a merge commit message.
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `PR_BODY` - default to the pull request's body.
         * - `BLANK` - default to a blank commit message.
         */
        merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK";
        /**
         * The default value for a merge commit title.
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
         */
        merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE";
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
        /**
         * The default value for a squash merge commit message:
         *
         * - `PR_BODY` - default to the pull request's body.
         * - `COMMIT_MESSAGES` - default to the branch's commit messages.
         * - `BLANK` - default to a blank commit message.
         */
        squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK";
        /**
         * The default value for a squash merge commit title:
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
         */
        squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE";
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
        /**
         * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
         */
        use_squash_pr_title_as_default?: boolean;
        visibility: "public" | "private" | "internal";
        watchers: number & tags.Type<"int32">;
        watchers_count: number & tags.Type<"int32">;
        /**
         * Whether to require contributors to sign off on web-based commits
         */
        web_commit_signoff_required?: boolean;
      };
      sha: string;
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
    body: string | null;
    changed_files?: number & tags.Type<"int32">;
    closed_at: (string & tags.Format<"date-time">) | null;
    comments?: number & tags.Type<"int32">;
    comments_url: string & tags.Format<"uri">;
    commits?: number & tags.Type<"int32">;
    commits_url: string & tags.Format<"uri">;
    created_at: string & tags.Format<"date-time">;
    deletions?: number & tags.Type<"int32">;
    diff_url: string & tags.Format<"uri">;
    /**
     * Indicates whether or not the pull request is a draft.
     */
    draft: boolean;
    head: {
      label: string | null;
      ref: string;
      /**
       * A git repository
       *
       * @title Repository
       */
      repo: {
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
        /**
         * The default value for a merge commit message.
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `PR_BODY` - default to the pull request's body.
         * - `BLANK` - default to a blank commit message.
         */
        merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK";
        /**
         * The default value for a merge commit title.
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
         */
        merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE";
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
        /**
         * The default value for a squash merge commit message:
         *
         * - `PR_BODY` - default to the pull request's body.
         * - `COMMIT_MESSAGES` - default to the branch's commit messages.
         * - `BLANK` - default to a blank commit message.
         */
        squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK";
        /**
         * The default value for a squash merge commit title:
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
         */
        squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE";
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
        /**
         * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
         */
        use_squash_pr_title_as_default?: boolean;
        visibility: "public" | "private" | "internal";
        watchers: number & tags.Type<"int32">;
        watchers_count: number & tags.Type<"int32">;
        /**
         * Whether to require contributors to sign off on web-based commits
         */
        web_commit_signoff_required?: boolean;
      } | null;
      sha: string;
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
    html_url: string & tags.Format<"uri">;
    id: number & tags.Type<"int32">;
    issue_url: string & tags.Format<"uri">;
    labels: {
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
    locked: boolean;
    /**
     * Indicates whether maintainers can modify the pull request.
     */
    maintainer_can_modify?: boolean;
    merge_commit_sha: string | null;
    mergeable?: boolean | null;
    mergeable_state?: string;
    merged?: boolean | null;
    merged_at: (string & tags.Format<"date-time">) | null;
    /**
     * @title User
     */
    merged_by?: {
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
    /**
     * Number uniquely identifying the pull request within its repository.
     */
    number: number & tags.Type<"int32">;
    patch_url: string & tags.Format<"uri">;
    rebaseable?: boolean | null;
    requested_reviewers: (
      | {
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
        }
      | {
          deleted?: boolean;
          /**
           * Description of the team
           */
          description: string | null;
          html_url: string & tags.Format<"uri">;
          /**
           * Unique identifier of the team
           */
          id: number & tags.Type<"int32">;
          members_url: string & tags.Format<"uri-template">;
          /**
           * Name of the team
           */
          name: string;
          node_id: string;
          parent?: {
            /**
             * Description of the team
             */
            description: string | null;
            html_url: string & tags.Format<"uri">;
            /**
             * Unique identifier of the team
             */
            id: number & tags.Type<"int32">;
            members_url: string & tags.Format<"uri-template">;
            /**
             * Name of the team
             */
            name: string;
            node_id: string;
            /**
             * Permission that the team will have for its repositories
             */
            permission: string;
            privacy: "open" | "closed" | "secret";
            repositories_url: string & tags.Format<"uri">;
            slug: string;
            /**
             * URL for the team
             */
            url: string & tags.Format<"uri">;
          } | null;
          /**
           * Permission that the team will have for its repositories
           */
          permission: string;
          privacy: "open" | "closed" | "secret";
          repositories_url: string & tags.Format<"uri">;
          slug: string;
          /**
           * URL for the team
           */
          url: string & tags.Format<"uri">;
        }
      | null
    )[];
    requested_teams: {
      deleted?: boolean;
      /**
       * Description of the team
       */
      description?: string | null;
      html_url?: string & tags.Format<"uri">;
      /**
       * Unique identifier of the team
       */
      id: number & tags.Type<"int32">;
      members_url?: string & tags.Format<"uri-template">;
      /**
       * Name of the team
       */
      name: string;
      node_id?: string;
      parent?: {
        /**
         * Description of the team
         */
        description: string | null;
        html_url: string & tags.Format<"uri">;
        /**
         * Unique identifier of the team
         */
        id: number & tags.Type<"int32">;
        members_url: string & tags.Format<"uri-template">;
        /**
         * Name of the team
         */
        name: string;
        node_id: string;
        /**
         * Permission that the team will have for its repositories
         */
        permission: string;
        privacy: "open" | "closed" | "secret";
        repositories_url: string & tags.Format<"uri">;
        slug: string;
        /**
         * URL for the team
         */
        url: string & tags.Format<"uri">;
      } | null;
      /**
       * Permission that the team will have for its repositories
       */
      permission?: string;
      privacy?: "open" | "closed" | "secret";
      repositories_url?: string & tags.Format<"uri">;
      slug?: string;
      /**
       * URL for the team
       */
      url?: string & tags.Format<"uri">;
    }[];
    review_comment_url: string & tags.Format<"uri-template">;
    review_comments?: number & tags.Type<"int32">;
    review_comments_url: string & tags.Format<"uri">;
    /**
     * State of this Pull Request. Either `open` or `closed`.
     */
    state: "open" | "closed";
    statuses_url: string & tags.Format<"uri">;
    /**
     * The title of the pull request.
     */
    title: string;
    updated_at: string & tags.Format<"date-time">;
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
  repository: repository_minus_webhooks;
  sender?: simple_minus_user_minus_webhooks;
};
