import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { nullable_minus_milestone } from "./nullable_minus_milestone";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { team_minus_simple } from "./team_minus_simple";
import { nullable_minus_license_minus_simple } from "./nullable_minus_license_minus_simple";
import { link } from "./link";
import { author_minus_association } from "./author_minus_association";
import { auto_minus_merge } from "./auto_minus_merge";

export type pull_minus_request_minus_webhook = {
  url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/pulls/1347";
    }>;
  id?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
      example: 1;
    }>;
  node_id?: string &
    tags.JsonSchemaPlugin<{
      example: "MDExOlB1bGxSZXF1ZXN0MQ==";
    }>;
  html_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/pull/1347";
    }>;
  diff_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/pull/1347.diff";
    }>;
  patch_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/pull/1347.patch";
    }>;
  issue_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/issues/1347";
    }>;
  commits_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits";
    }>;
  review_comments_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments";
    }>;
  review_comment_url?: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}";
    }>;
  comments_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments";
    }>;
  statuses_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e";
    }>;
  /**
   * Number uniquely identifying the pull request within its repository.
   */
  number?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  /**
   * State of this Pull Request. Either `open` or `closed`.
   */
  state?: "open" | "closed";
  locked?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * The title of the pull request.
   */
  title?: string &
    tags.JsonSchemaPlugin<{
      example: "Amazing new feature";
    }>;
  user?: simple_minus_user;
  body?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "Please pull these awesome changes";
        }>)
    | null;
  labels?: {
    id: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "int64";
      }>;
    node_id: string;
    url: string;
    name: string;
    description: string | null;
    color: string;
    default: boolean;
  }[];
  milestone?: nullable_minus_milestone;
  active_lock_reason?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "too heated";
        }>)
    | null;
  created_at?: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:01:12Z";
    }>;
  updated_at?: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:01:12Z";
    }>;
  closed_at?:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2011-01-26T19:01:12Z";
        }>)
    | null;
  merged_at?:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2011-01-26T19:01:12Z";
        }>)
    | null;
  merge_commit_sha?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "e5bd3914e2e596debea16f433f57875b5b90bcd6";
        }>)
    | null;
  assignee?: nullable_minus_simple_minus_user;
  assignees?: simple_minus_user[] | null;
  requested_reviewers?: simple_minus_user[] | null;
  requested_teams?: team_minus_simple[] | null;
  head?: {
    label: string;
    ref: string;
    repo: {
      archive_url: string;
      assignees_url: string;
      blobs_url: string;
      branches_url: string;
      collaborators_url: string;
      comments_url: string;
      commits_url: string;
      compare_url: string;
      contents_url: string;
      contributors_url: string & tags.Format<"uri">;
      deployments_url: string & tags.Format<"uri">;
      description: string | null;
      downloads_url: string & tags.Format<"uri">;
      events_url: string & tags.Format<"uri">;
      fork: boolean;
      forks_url: string & tags.Format<"uri">;
      full_name: string;
      git_commits_url: string;
      git_refs_url: string;
      git_tags_url: string;
      hooks_url: string & tags.Format<"uri">;
      html_url: string & tags.Format<"uri">;
      id: number & tags.Type<"int32">;
      node_id: string;
      issue_comment_url: string;
      issue_events_url: string;
      issues_url: string;
      keys_url: string;
      labels_url: string;
      languages_url: string & tags.Format<"uri">;
      merges_url: string & tags.Format<"uri">;
      milestones_url: string;
      name: string;
      notifications_url: string;
      owner: {
        avatar_url: string & tags.Format<"uri">;
        events_url: string;
        followers_url: string & tags.Format<"uri">;
        following_url: string;
        gists_url: string;
        gravatar_id: string | null;
        html_url: string & tags.Format<"uri">;
        id: number & tags.Type<"int32">;
        node_id: string;
        login: string;
        organizations_url: string & tags.Format<"uri">;
        received_events_url: string & tags.Format<"uri">;
        repos_url: string & tags.Format<"uri">;
        site_admin: boolean;
        starred_url: string;
        subscriptions_url: string & tags.Format<"uri">;
        type: string;
        url: string & tags.Format<"uri">;
      };
      private: boolean;
      pulls_url: string;
      releases_url: string;
      stargazers_url: string & tags.Format<"uri">;
      statuses_url: string;
      subscribers_url: string & tags.Format<"uri">;
      subscription_url: string & tags.Format<"uri">;
      tags_url: string & tags.Format<"uri">;
      teams_url: string & tags.Format<"uri">;
      trees_url: string;
      url: string & tags.Format<"uri">;
      clone_url: string;
      default_branch: string;
      forks: number & tags.Type<"int32">;
      forks_count: number & tags.Type<"int32">;
      git_url: string;
      has_downloads: boolean;
      has_issues: boolean;
      has_projects: boolean;
      has_wiki: boolean;
      has_pages: boolean;
      has_discussions: boolean;
      homepage: (string & tags.Format<"uri">) | null;
      language: string | null;
      master_branch?: string;
      archived: boolean;
      disabled: boolean;
      /**
       * The repository visibility: public, private, or internal.
       */
      visibility?: string;
      mirror_url: (string & tags.Format<"uri">) | null;
      open_issues: number & tags.Type<"int32">;
      open_issues_count: number & tags.Type<"int32">;
      permissions?: {
        admin: boolean;
        maintain?: boolean;
        push: boolean;
        triage?: boolean;
        pull: boolean;
      };
      temp_clone_token?: string;
      allow_merge_commit?: boolean;
      allow_squash_merge?: boolean;
      allow_rebase_merge?: boolean;
      license: {
        key: string;
        name: string;
        url: (string & tags.Format<"uri">) | null;
        spdx_id: string | null;
        node_id: string;
      } | null;
      pushed_at: string & tags.Format<"date-time">;
      size: number & tags.Type<"int32">;
      ssh_url: string;
      stargazers_count: number & tags.Type<"int32">;
      svn_url: string & tags.Format<"uri">;
      topics?: string[];
      watchers: number & tags.Type<"int32">;
      watchers_count: number & tags.Type<"int32">;
      created_at: string & tags.Format<"date-time">;
      updated_at: string & tags.Format<"date-time">;
      allow_forking?: boolean;
      is_template?: boolean;
      web_commit_signoff_required?: boolean;
    } | null;
    sha: string;
    user: {
      avatar_url: string & tags.Format<"uri">;
      events_url: string;
      followers_url: string & tags.Format<"uri">;
      following_url: string;
      gists_url: string;
      gravatar_id: string | null;
      html_url: string & tags.Format<"uri">;
      id: number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          format: "int64";
        }>;
      node_id: string;
      login: string;
      organizations_url: string & tags.Format<"uri">;
      received_events_url: string & tags.Format<"uri">;
      repos_url: string & tags.Format<"uri">;
      site_admin: boolean;
      starred_url: string;
      subscriptions_url: string & tags.Format<"uri">;
      type: string;
      url: string & tags.Format<"uri">;
    };
  };
  base?: {
    label: string;
    ref: string;
    repo: {
      archive_url: string;
      assignees_url: string;
      blobs_url: string;
      branches_url: string;
      collaborators_url: string;
      comments_url: string;
      commits_url: string;
      compare_url: string;
      contents_url: string;
      contributors_url: string & tags.Format<"uri">;
      deployments_url: string & tags.Format<"uri">;
      description: string | null;
      downloads_url: string & tags.Format<"uri">;
      events_url: string & tags.Format<"uri">;
      fork: boolean;
      forks_url: string & tags.Format<"uri">;
      full_name: string;
      git_commits_url: string;
      git_refs_url: string;
      git_tags_url: string;
      hooks_url: string & tags.Format<"uri">;
      html_url: string & tags.Format<"uri">;
      id: number & tags.Type<"int32">;
      is_template?: boolean;
      node_id: string;
      issue_comment_url: string;
      issue_events_url: string;
      issues_url: string;
      keys_url: string;
      labels_url: string;
      languages_url: string & tags.Format<"uri">;
      merges_url: string & tags.Format<"uri">;
      milestones_url: string;
      name: string;
      notifications_url: string;
      owner: {
        avatar_url: string & tags.Format<"uri">;
        events_url: string;
        followers_url: string & tags.Format<"uri">;
        following_url: string;
        gists_url: string;
        gravatar_id: string | null;
        html_url: string & tags.Format<"uri">;
        id: number & tags.Type<"int32">;
        node_id: string;
        login: string;
        organizations_url: string & tags.Format<"uri">;
        received_events_url: string & tags.Format<"uri">;
        repos_url: string & tags.Format<"uri">;
        site_admin: boolean;
        starred_url: string;
        subscriptions_url: string & tags.Format<"uri">;
        type: string;
        url: string & tags.Format<"uri">;
      };
      private: boolean;
      pulls_url: string;
      releases_url: string;
      stargazers_url: string & tags.Format<"uri">;
      statuses_url: string;
      subscribers_url: string & tags.Format<"uri">;
      subscription_url: string & tags.Format<"uri">;
      tags_url: string & tags.Format<"uri">;
      teams_url: string & tags.Format<"uri">;
      trees_url: string;
      url: string & tags.Format<"uri">;
      clone_url: string;
      default_branch: string;
      forks: number & tags.Type<"int32">;
      forks_count: number & tags.Type<"int32">;
      git_url: string;
      has_downloads: boolean;
      has_issues: boolean;
      has_projects: boolean;
      has_wiki: boolean;
      has_pages: boolean;
      has_discussions: boolean;
      homepage: (string & tags.Format<"uri">) | null;
      language: string | null;
      master_branch?: string;
      archived: boolean;
      disabled: boolean;
      /**
       * The repository visibility: public, private, or internal.
       */
      visibility?: string;
      mirror_url: (string & tags.Format<"uri">) | null;
      open_issues: number & tags.Type<"int32">;
      open_issues_count: number & tags.Type<"int32">;
      permissions?: {
        admin: boolean;
        maintain?: boolean;
        push: boolean;
        triage?: boolean;
        pull: boolean;
      };
      temp_clone_token?: string;
      allow_merge_commit?: boolean;
      allow_squash_merge?: boolean;
      allow_rebase_merge?: boolean;
      license: nullable_minus_license_minus_simple;
      pushed_at: string & tags.Format<"date-time">;
      size: number & tags.Type<"int32">;
      ssh_url: string;
      stargazers_count: number & tags.Type<"int32">;
      svn_url: string & tags.Format<"uri">;
      topics?: string[];
      watchers: number & tags.Type<"int32">;
      watchers_count: number & tags.Type<"int32">;
      created_at: string & tags.Format<"date-time">;
      updated_at: string & tags.Format<"date-time">;
      allow_forking?: boolean;
      web_commit_signoff_required?: boolean;
    };
    sha: string;
    user: {
      avatar_url: string & tags.Format<"uri">;
      events_url: string;
      followers_url: string & tags.Format<"uri">;
      following_url: string;
      gists_url: string;
      gravatar_id: string | null;
      html_url: string & tags.Format<"uri">;
      id: number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          format: "int64";
        }>;
      node_id: string;
      login: string;
      organizations_url: string & tags.Format<"uri">;
      received_events_url: string & tags.Format<"uri">;
      repos_url: string & tags.Format<"uri">;
      site_admin: boolean;
      starred_url: string;
      subscriptions_url: string & tags.Format<"uri">;
      type: string;
      url: string & tags.Format<"uri">;
    };
  };
  _links?: {
    comments: link;
    commits: link;
    statuses: link;
    html: link;
    issue: link;
    review_comments: link;
    review_comment: link;
    self: link;
  };
  author_association?: author_minus_association;
  auto_merge?: auto_minus_merge;
  /**
   * Indicates whether or not the pull request is a draft.
   */
  draft?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  merged?: boolean;
  mergeable?:
    | (boolean &
        tags.JsonSchemaPlugin<{
          example: true;
        }>)
    | null;
  rebaseable?:
    | (boolean &
        tags.JsonSchemaPlugin<{
          example: true;
        }>)
    | null;
  mergeable_state?: string &
    tags.JsonSchemaPlugin<{
      example: "clean";
    }>;
  merged_by?: nullable_minus_simple_minus_user;
  comments?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 10;
    }>;
  review_comments?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 0;
    }>;
  /**
   * Indicates whether maintainers can modify the pull request.
   */
  maintainer_can_modify?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  commits?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 3;
    }>;
  additions?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 100;
    }>;
  deletions?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 3;
    }>;
  changed_files?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 5;
    }>;
  /**
   * Whether to allow auto-merge for pull requests.
   */
  allow_auto_merge?: boolean;
  /**
   * Whether to allow updating the pull request's branch.
   */
  allow_update_branch?: boolean;
  /**
   * Whether to delete head branches when pull requests are merged.
   */
  delete_branch_on_merge?: boolean;
  /**
   * The default value for a merge commit message.
   * - `PR_TITLE` - default to the pull request's title.
   * - `PR_BODY` - default to the pull request's body.
   * - `BLANK` - default to a blank commit message.
   */
  merge_commit_message?: "PR_BODY" | "PR_TITLE" | "BLANK";
  /**
   * The default value for a merge commit title.
   * - `PR_TITLE` - default to the pull request's title.
   * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., "Merge pull request #123 from branch-name").
   */
  merge_commit_title?: "PR_TITLE" | "MERGE_MESSAGE";
  /**
   * The default value for a squash merge commit message:
   * - `PR_BODY` - default to the pull request's body.
   * - `COMMIT_MESSAGES` - default to the branch's commit messages.
   * - `BLANK` - default to a blank commit message.
   */
  squash_merge_commit_message?: "PR_BODY" | "COMMIT_MESSAGES" | "BLANK";
  /**
   * The default value for a squash merge commit title:
   * - `PR_TITLE` - default to the pull request's title.
   * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
   */
  squash_merge_commit_title?: "PR_TITLE" | "COMMIT_OR_PR_TITLE";
  /**
   * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.**
   */
  use_squash_pr_title_as_default?: boolean;
};
