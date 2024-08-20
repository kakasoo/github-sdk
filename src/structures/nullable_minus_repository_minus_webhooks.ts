import { tags } from "typia";

import { nullable_minus_license_minus_simple } from "./nullable_minus_license_minus_simple";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { simple_minus_user } from "./simple_minus_user";

/**
 * The repository on GitHub where the event occurred. Webhook payloads contain the `repository` property
 * when the event occurs from activity in a repository.
 *
 * @title Repository
 */
export type nullable_minus_repository_minus_webhooks = {
  /**
   * Unique identifier of the repository
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
      format: "int64";
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDEwOlJlcG9zaXRvcnkxMjk2MjY5";
    }>;
  /**
   * The name of the repository.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "Team Environment";
    }>;
  full_name: string &
    tags.JsonSchemaPlugin<{
      example: "octocat/Hello-World";
    }>;
  license: nullable_minus_license_minus_simple;
  organization?: nullable_minus_simple_minus_user;
  forks: number & tags.Type<"int32">;
  permissions?: {
    admin: boolean;
    pull: boolean;
    triage?: boolean;
    push: boolean;
    maintain?: boolean;
  };
  owner: simple_minus_user;
  /**
   * Whether the repository is private or public.
   */
  private: boolean;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World";
    }>;
  description:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "This your first repo!";
        }>)
    | null;
  fork: boolean;
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World";
    }>;
  archive_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}";
    }>;
  assignees_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/assignees{/user}";
    }>;
  blobs_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}";
    }>;
  branches_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/branches{/branch}";
    }>;
  collaborators_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}";
    }>;
  comments_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/comments{/number}";
    }>;
  commits_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/commits{/sha}";
    }>;
  compare_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}";
    }>;
  contents_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/contents/{+path}";
    }>;
  contributors_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/contributors";
    }>;
  deployments_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/deployments";
    }>;
  downloads_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/downloads";
    }>;
  events_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/events";
    }>;
  forks_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/forks";
    }>;
  git_commits_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}";
    }>;
  git_refs_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}";
    }>;
  git_tags_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}";
    }>;
  git_url: string &
    tags.JsonSchemaPlugin<{
      example: "git:github.com/octocat/Hello-World.git";
    }>;
  issue_comment_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}";
    }>;
  issue_events_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/issues/events{/number}";
    }>;
  issues_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/issues{/number}";
    }>;
  keys_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/keys{/key_id}";
    }>;
  labels_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/labels{/name}";
    }>;
  languages_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/languages";
    }>;
  merges_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/merges";
    }>;
  milestones_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/milestones{/number}";
    }>;
  notifications_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}";
    }>;
  pulls_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/pulls{/number}";
    }>;
  releases_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/releases{/id}";
    }>;
  ssh_url: string &
    tags.JsonSchemaPlugin<{
      example: "git@github.com:octocat/Hello-World.git";
    }>;
  stargazers_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/stargazers";
    }>;
  statuses_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/statuses/{sha}";
    }>;
  subscribers_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/subscribers";
    }>;
  subscription_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/subscription";
    }>;
  tags_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/tags";
    }>;
  teams_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/teams";
    }>;
  trees_url: string &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}";
    }>;
  clone_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World.git";
    }>;
  mirror_url:
    | (string &
        tags.Format<"uri"> &
        tags.JsonSchemaPlugin<{
          example: "git:git.example.com/octocat/Hello-World";
        }>)
    | null;
  hooks_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/hooks";
    }>;
  svn_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://svn.github.com/octocat/Hello-World";
    }>;
  homepage:
    | (string &
        tags.Format<"uri"> &
        tags.JsonSchemaPlugin<{
          example: "https://github.com";
        }>)
    | null;
  language: string | null;
  forks_count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 9;
    }>;
  stargazers_count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 80;
    }>;
  watchers_count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 80;
    }>;
  /**
   * The size of the repository, in kilobytes. Size is calculated hourly. When a repository is initially created, the size is 0.
   */
  size: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 108;
    }>;
  /**
   * The default branch of the repository.
   */
  default_branch: string &
    tags.JsonSchemaPlugin<{
      example: "master";
    }>;
  open_issues_count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 0;
    }>;
  /**
   * Whether this repository acts as a template that can be used to generate new repositories.
   */
  is_template?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  topics?: string[];
  /**
   * The custom properties that were defined for the repository. The keys are the custom property names, and the values are the corresponding custom property values.
   */
  custom_properties?: {};
  /**
   * Whether issues are enabled.
   */
  has_issues: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Whether projects are enabled.
   */
  has_projects: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Whether the wiki is enabled.
   */
  has_wiki: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  has_pages: boolean;
  /**
   * Whether downloads are enabled.
   */
  has_downloads: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Whether discussions are enabled.
   */
  has_discussions?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Whether the repository is archived.
   */
  archived: boolean;
  /**
   * Returns whether or not this repository disabled.
   */
  disabled: boolean;
  /**
   * The repository visibility: public, private, or internal.
   */
  visibility?: string & tags.Default<"public">;
  pushed_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2011-01-26T19:06:43Z";
        }>)
    | null;
  created_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2011-01-26T19:01:12Z";
        }>)
    | null;
  updated_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2011-01-26T19:14:43Z";
        }>)
    | null;
  /**
   * Whether to allow rebase merges for pull requests.
   */
  allow_rebase_merge?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  template_repository?: {
    id?: number & tags.Type<"int32">;
    node_id?: string;
    name?: string;
    full_name?: string;
    owner?: {
      login?: string;
      id?: number & tags.Type<"int32">;
      node_id?: string;
      avatar_url?: string;
      gravatar_id?: string;
      url?: string;
      html_url?: string;
      followers_url?: string;
      following_url?: string;
      gists_url?: string;
      starred_url?: string;
      subscriptions_url?: string;
      organizations_url?: string;
      repos_url?: string;
      events_url?: string;
      received_events_url?: string;
      type?: string;
      site_admin?: boolean;
    };
    private?: boolean;
    html_url?: string;
    description?: string;
    fork?: boolean;
    url?: string;
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
    downloads_url?: string;
    events_url?: string;
    forks_url?: string;
    git_commits_url?: string;
    git_refs_url?: string;
    git_tags_url?: string;
    git_url?: string;
    issue_comment_url?: string;
    issue_events_url?: string;
    issues_url?: string;
    keys_url?: string;
    labels_url?: string;
    languages_url?: string;
    merges_url?: string;
    milestones_url?: string;
    notifications_url?: string;
    pulls_url?: string;
    releases_url?: string;
    ssh_url?: string;
    stargazers_url?: string;
    statuses_url?: string;
    subscribers_url?: string;
    subscription_url?: string;
    tags_url?: string;
    teams_url?: string;
    trees_url?: string;
    clone_url?: string;
    mirror_url?: string;
    hooks_url?: string;
    svn_url?: string;
    homepage?: string;
    language?: string;
    forks_count?: number & tags.Type<"int32">;
    stargazers_count?: number & tags.Type<"int32">;
    watchers_count?: number & tags.Type<"int32">;
    size?: number & tags.Type<"int32">;
    default_branch?: string;
    open_issues_count?: number & tags.Type<"int32">;
    is_template?: boolean;
    topics?: string[];
    has_issues?: boolean;
    has_projects?: boolean;
    has_wiki?: boolean;
    has_pages?: boolean;
    has_downloads?: boolean;
    archived?: boolean;
    disabled?: boolean;
    visibility?: string;
    pushed_at?: string;
    created_at?: string;
    updated_at?: string;
    permissions?: {
      admin?: boolean;
      maintain?: boolean;
      push?: boolean;
      triage?: boolean;
      pull?: boolean;
    };
    allow_rebase_merge?: boolean;
    temp_clone_token?: string;
    allow_squash_merge?: boolean;
    allow_auto_merge?: boolean;
    delete_branch_on_merge?: boolean;
    allow_update_branch?: boolean;
    use_squash_pr_title_as_default?: boolean;
    /**
     * The default value for a squash merge commit title:
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
     */
    squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE";
    /**
     * The default value for a squash merge commit message:
     *
     * - `PR_BODY` - default to the pull request's body.
     * - `COMMIT_MESSAGES` - default to the branch's commit messages.
     * - `BLANK` - default to a blank commit message.
     */
    squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK";
    /**
     * The default value for a merge commit title.
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
     */
    merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE";
    /**
     * The default value for a merge commit message.
     *
     * - `PR_TITLE` - default to the pull request's title.
     * - `PR_BODY` - default to the pull request's body.
     * - `BLANK` - default to a blank commit message.
     */
    merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK";
    allow_merge_commit?: boolean;
    subscribers_count?: number & tags.Type<"int32">;
    network_count?: number & tags.Type<"int32">;
  } | null;
  temp_clone_token?: string;
  /**
   * Whether to allow squash merges for pull requests.
   */
  allow_squash_merge?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Whether to allow Auto-merge to be used on pull requests.
   */
  allow_auto_merge?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * Whether to delete head branches when pull requests are merged
   */
  delete_branch_on_merge?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging.
   */
  allow_update_branch?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
   *
   * @deprecated
   */
  use_squash_pr_title_as_default?: boolean;
  /**
   * The default value for a squash merge commit title:
   *
   * - `PR_TITLE` - default to the pull request's title.
   * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
   */
  squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE";
  /**
   * The default value for a squash merge commit message:
   *
   * - `PR_BODY` - default to the pull request's body.
   * - `COMMIT_MESSAGES` - default to the branch's commit messages.
   * - `BLANK` - default to a blank commit message.
   */
  squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK";
  /**
   * The default value for a merge commit title.
   *
   * - `PR_TITLE` - default to the pull request's title.
   * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
   */
  merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE";
  /**
   * The default value for a merge commit message.
   *
   * - `PR_TITLE` - default to the pull request's title.
   * - `PR_BODY` - default to the pull request's body.
   * - `BLANK` - default to a blank commit message.
   */
  merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK";
  /**
   * Whether to allow merge commits for pull requests.
   */
  allow_merge_commit?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Whether to allow forking this repo
   */
  allow_forking?: boolean;
  /**
   * Whether to require contributors to sign off on web-based commits
   */
  web_commit_signoff_required?: boolean;
  subscribers_count?: number & tags.Type<"int32">;
  network_count?: number & tags.Type<"int32">;
  open_issues: number & tags.Type<"int32">;
  watchers: number & tags.Type<"int32">;
  master_branch?: string;
  starred_at?: string &
    tags.JsonSchemaPlugin<{
      example: '"2020-07-09T00:17:42Z"';
    }>;
  /**
   * Whether anonymous git access is enabled for this repository
   */
  anonymous_access_enabled?: boolean;
} | null;
