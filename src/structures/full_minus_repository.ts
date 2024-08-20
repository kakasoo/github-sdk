import { tags } from "typia";

import { code_minus_of_minus_conduct_minus_simple } from "./code_minus_of_minus_conduct_minus_simple";
import { nullable_minus_license_minus_simple } from "./nullable_minus_license_minus_simple";
import { nullable_minus_repository } from "./nullable_minus_repository";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { repository } from "./repository";
import { security_minus_and_minus_analysis } from "./security_minus_and_minus_analysis";
import { simple_minus_user } from "./simple_minus_user";

/**
 * Full Repository
 *
 * @title Full Repository
 */
export type full_minus_repository = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
      example: 1296269;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDEwOlJlcG9zaXRvcnkxMjk2MjY5";
    }>;
  name: string &
    tags.JsonSchemaPlugin<{
      example: "Hello-World";
    }>;
  full_name: string &
    tags.JsonSchemaPlugin<{
      example: "octocat/Hello-World";
    }>;
  owner: simple_minus_user;
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
  default_branch: string &
    tags.JsonSchemaPlugin<{
      example: "master";
    }>;
  open_issues_count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 0;
    }>;
  is_template?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  topics?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["octocat", "atom", "electron", "API"];
    }>;
  has_issues: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  has_projects: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  has_wiki: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  has_pages: boolean;
  has_downloads?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  has_discussions: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  archived: boolean;
  /**
   * Returns whether or not this repository disabled.
   */
  disabled: boolean;
  /**
   * The repository visibility: public, private, or internal.
   */
  visibility?: string &
    tags.JsonSchemaPlugin<{
      example: "public";
    }>;
  pushed_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:06:43Z";
    }>;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:01:12Z";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:14:43Z";
    }>;
  permissions?: {
    admin: boolean;
    maintain?: boolean;
    push: boolean;
    triage?: boolean;
    pull: boolean;
  };
  allow_rebase_merge?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  template_repository?: nullable_minus_repository;
  temp_clone_token?: string | null;
  allow_squash_merge?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  allow_auto_merge?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  delete_branch_on_merge?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  allow_merge_commit?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  allow_update_branch?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  use_squash_pr_title_as_default?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
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
   *   - `PR_TITLE` - default to the pull request's title.
   *   - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
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
  allow_forking?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  web_commit_signoff_required?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  subscribers_count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  network_count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 0;
    }>;
  license: nullable_minus_license_minus_simple;
  organization?: nullable_minus_simple_minus_user;
  parent?: repository;
  source?: repository;
  forks: number & tags.Type<"int32">;
  master_branch?: string;
  open_issues: number & tags.Type<"int32">;
  watchers: number & tags.Type<"int32">;
  /**
   * Whether anonymous git access is allowed.
   */
  anonymous_access_enabled?: boolean;
  code_of_conduct?: code_minus_of_minus_conduct_minus_simple;
  security_and_analysis?: security_minus_and_minus_analysis;
  /**
   * The custom properties that were defined for the repository. The keys are the custom property names, and the values are the corresponding custom property values.
   */
  custom_properties?: {};
};
