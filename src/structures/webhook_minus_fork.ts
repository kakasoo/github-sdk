import { tags } from "typia";

import { enterprise_minus_webhooks } from "./enterprise_minus_webhooks";
import { simple_minus_installation } from "./simple_minus_installation";
import { organization_minus_simple_minus_webhooks } from "./organization_minus_simple_minus_webhooks";
import { repository_minus_webhooks } from "./repository_minus_webhooks";
import { simple_minus_user_minus_webhooks } from "./simple_minus_user_minus_webhooks";

/**
 * A user forks a repository.
 *
 * @title fork event
 */
export type webhook_minus_fork = {
  enterprise?: enterprise_minus_webhooks;
  /**
   * The created [`repository`](https://docs.github.com/rest/repos/repos#get-a-repository) resource.
   */
  forkee: {
    /**
     * Whether to allow auto-merge for pull requests.
     */
    allow_auto_merge?: boolean;
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
    archive_url?: string;
    archived?: boolean;
    assignees_url?: string;
    blobs_url?: string;
    branches_url?: string;
    clone_url?: string;
    collaborators_url?: string;
    comments_url?: string;
    commits_url?: string;
    compare_url?: string;
    contents_url?: string;
    contributors_url?: string;
    created_at?: string;
    default_branch?: string;
    /**
     * Whether to delete head branches when pull requests are merged
     */
    delete_branch_on_merge?: boolean;
    deployments_url?: string;
    description?: string | null;
    disabled?: boolean;
    downloads_url?: string;
    events_url?: string;
    fork?: true;
    forks?: number & tags.Type<"int32">;
    forks_count?: number & tags.Type<"int32">;
    forks_url?: string;
    full_name?: string;
    git_commits_url?: string;
    git_refs_url?: string;
    git_tags_url?: string;
    git_url?: string;
    has_downloads?: boolean;
    has_issues?: boolean;
    has_pages?: boolean;
    has_projects?: boolean;
    has_wiki?: boolean;
    homepage?: string | null;
    hooks_url?: string;
    html_url?: string;
    id?: number & tags.Type<"int32">;
    is_template?: boolean;
    issue_comment_url?: string;
    issue_events_url?: string;
    issues_url?: string;
    keys_url?: string;
    labels_url?: string;
    language?: any | null;
    languages_url?: string;
    license?: {} | null;
    master_branch?: string;
    merges_url?: string;
    milestones_url?: string;
    mirror_url?: any | null;
    name?: string;
    node_id?: string;
    notifications_url?: string;
    open_issues?: number & tags.Type<"int32">;
    open_issues_count?: number & tags.Type<"int32">;
    organization?: string;
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
    permissions?: {
      admin: boolean;
      maintain?: boolean;
      pull: boolean;
      push: boolean;
      triage?: boolean;
    };
    private?: boolean;
    public?: boolean;
    pulls_url?: string;
    pushed_at?: string;
    releases_url?: string;
    role_name?: string | null;
    size?: number & tags.Type<"int32">;
    ssh_url?: string;
    stargazers?: number & tags.Type<"int32">;
    stargazers_count?: number & tags.Type<"int32">;
    stargazers_url?: string;
    statuses_url?: string;
    subscribers_url?: string;
    subscription_url?: string;
    svn_url?: string;
    tags_url?: string;
    teams_url?: string;
    topics?: (any | null)[];
    trees_url?: string;
    updated_at?: string;
    url?: string;
    visibility?: string;
    watchers?: number & tags.Type<"int32">;
    watchers_count?: number & tags.Type<"int32">;
    /**
     * Whether to require contributors to sign off on web-based commits
     */
    web_commit_signoff_required?: boolean;
  };
  installation?: simple_minus_installation;
  organization?: organization_minus_simple_minus_webhooks;
  repository: repository_minus_webhooks;
  sender: simple_minus_user_minus_webhooks;
};
