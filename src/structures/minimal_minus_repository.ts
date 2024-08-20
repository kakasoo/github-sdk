import { tags } from "typia";

import { code_minus_of_minus_conduct } from "./code_minus_of_minus_conduct";
import { security_minus_and_minus_analysis } from "./security_minus_and_minus_analysis";
import { simple_minus_user } from "./simple_minus_user";

/**
 * Minimal Repository
 *
 * @title Minimal Repository
 */
export type minimal_minus_repository = {
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
  git_url?: string;
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
  ssh_url?: string;
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
  clone_url?: string;
  mirror_url?: string | null;
  hooks_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "http://api.github.com/repos/octocat/Hello-World/hooks";
    }>;
  svn_url?: string;
  homepage?: string | null;
  language?: string | null;
  forks_count?: number & tags.Type<"int32">;
  stargazers_count?: number & tags.Type<"int32">;
  watchers_count?: number & tags.Type<"int32">;
  /**
   * The size of the repository, in kilobytes. Size is calculated hourly. When a repository is initially created, the size is 0.
   */
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
  has_discussions?: boolean;
  archived?: boolean;
  disabled?: boolean;
  visibility?: string;
  pushed_at?:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2011-01-26T19:06:43Z";
        }>)
    | null;
  created_at?:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2011-01-26T19:01:12Z";
        }>)
    | null;
  updated_at?:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2011-01-26T19:14:43Z";
        }>)
    | null;
  permissions?: {
    admin?: boolean;
    maintain?: boolean;
    push?: boolean;
    triage?: boolean;
    pull?: boolean;
  };
  role_name?: string &
    tags.JsonSchemaPlugin<{
      example: "admin";
    }>;
  temp_clone_token?: string;
  delete_branch_on_merge?: boolean;
  subscribers_count?: number & tags.Type<"int32">;
  network_count?: number & tags.Type<"int32">;
  code_of_conduct?: code_minus_of_minus_conduct;
  license?: {
    key?: string;
    name?: string;
    spdx_id?: string;
    url?: string;
    node_id?: string;
  } | null;
  forks?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 0;
    }>;
  open_issues?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 0;
    }>;
  watchers?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 0;
    }>;
  allow_forking?: boolean;
  web_commit_signoff_required?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  security_and_analysis?: security_minus_and_minus_analysis;
};
