import { tags } from "typia";

import { nullable_minus_license_minus_simple } from "./nullable_minus_license_minus_simple";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { search_minus_result_minus_text_minus_matches } from "./search_minus_result_minus_text_minus_matches";

/**
 * Repo Search Result Item
 *
 * @title Repo Search Result Item
 */
export type repo_minus_search_minus_result_minus_item = {
  id: number & tags.Type<"int32">;
  node_id: string;
  name: string;
  full_name: string;
  owner: nullable_minus_simple_minus_user;
  private: boolean;
  html_url: string & tags.Format<"uri">;
  description: string | null;
  fork: boolean;
  url: string & tags.Format<"uri">;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
  pushed_at: string & tags.Format<"date-time">;
  homepage: (string & tags.Format<"uri">) | null;
  size: number & tags.Type<"int32">;
  stargazers_count: number & tags.Type<"int32">;
  watchers_count: number & tags.Type<"int32">;
  language: string | null;
  forks_count: number & tags.Type<"int32">;
  open_issues_count: number & tags.Type<"int32">;
  master_branch?: string;
  default_branch: string;
  score: number;
  forks_url: string & tags.Format<"uri">;
  keys_url: string;
  collaborators_url: string;
  teams_url: string & tags.Format<"uri">;
  hooks_url: string & tags.Format<"uri">;
  issue_events_url: string;
  events_url: string & tags.Format<"uri">;
  assignees_url: string;
  branches_url: string;
  tags_url: string & tags.Format<"uri">;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string & tags.Format<"uri">;
  stargazers_url: string & tags.Format<"uri">;
  contributors_url: string & tags.Format<"uri">;
  subscribers_url: string & tags.Format<"uri">;
  subscription_url: string & tags.Format<"uri">;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string & tags.Format<"uri">;
  archive_url: string;
  downloads_url: string & tags.Format<"uri">;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string & tags.Format<"uri">;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string & tags.Format<"uri">;
  forks: number & tags.Type<"int32">;
  open_issues: number & tags.Type<"int32">;
  watchers: number & tags.Type<"int32">;
  topics?: string[];
  mirror_url: (string & tags.Format<"uri">) | null;
  has_issues: boolean;
  has_projects: boolean;
  has_pages: boolean;
  has_wiki: boolean;
  has_downloads: boolean;
  has_discussions?: boolean;
  archived: boolean;
  /**
   * Returns whether or not this repository disabled.
   */
  disabled: boolean;
  /**
   * The repository visibility: public, private, or internal.
   */
  visibility?: string;
  license: nullable_minus_license_minus_simple;
  permissions?: {
    admin: boolean;
    maintain?: boolean;
    push: boolean;
    triage?: boolean;
    pull: boolean;
  };
  text_matches?: search_minus_result_minus_text_minus_matches;
  temp_clone_token?: string;
  allow_merge_commit?: boolean;
  allow_squash_merge?: boolean;
  allow_rebase_merge?: boolean;
  allow_auto_merge?: boolean;
  delete_branch_on_merge?: boolean;
  allow_forking?: boolean;
  is_template?: boolean;
  web_commit_signoff_required?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
};
