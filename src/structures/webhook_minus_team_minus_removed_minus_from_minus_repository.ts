import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";
import { webhooks_team_1 } from "./webhooks_team_1";

/**
 * @title team removed_from_repository event
 */
export type webhook_minus_team_minus_removed_minus_from_minus_repository = {
  action: "removed_from_repository";
  enterprise?: enterprise_minus_webhooks;
  installation?: simple_minus_installation;
  organization: organization_minus_simple_minus_webhooks;
  /**
   * A git repository
   *
   * @title Repository
   */
  repository?: {
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
  };
  sender: simple_minus_user_minus_webhooks;
  team: webhooks_team_1;
};
