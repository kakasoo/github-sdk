import { tags } from "typia";

export type root = {
  current_user_url: string & tags.Format<"uri-template">;
  current_user_authorizations_html_url: string & tags.Format<"uri-template">;
  authorizations_url: string & tags.Format<"uri-template">;
  code_search_url: string & tags.Format<"uri-template">;
  commit_search_url: string & tags.Format<"uri-template">;
  emails_url: string & tags.Format<"uri-template">;
  emojis_url: string & tags.Format<"uri-template">;
  events_url: string & tags.Format<"uri-template">;
  feeds_url: string & tags.Format<"uri-template">;
  followers_url: string & tags.Format<"uri-template">;
  following_url: string & tags.Format<"uri-template">;
  gists_url: string & tags.Format<"uri-template">;
  /**
   * @deprecated
   */
  hub_url?: string & tags.Format<"uri-template">;
  issue_search_url: string & tags.Format<"uri-template">;
  issues_url: string & tags.Format<"uri-template">;
  keys_url: string & tags.Format<"uri-template">;
  label_search_url: string & tags.Format<"uri-template">;
  notifications_url: string & tags.Format<"uri-template">;
  organization_url: string & tags.Format<"uri-template">;
  organization_repositories_url: string & tags.Format<"uri-template">;
  organization_teams_url: string & tags.Format<"uri-template">;
  public_gists_url: string & tags.Format<"uri-template">;
  rate_limit_url: string & tags.Format<"uri-template">;
  repository_url: string & tags.Format<"uri-template">;
  repository_search_url: string & tags.Format<"uri-template">;
  current_user_repositories_url: string & tags.Format<"uri-template">;
  starred_url: string & tags.Format<"uri-template">;
  starred_gists_url: string & tags.Format<"uri-template">;
  topic_search_url?: string & tags.Format<"uri-template">;
  user_url: string & tags.Format<"uri-template">;
  user_organizations_url: string & tags.Format<"uri-template">;
  user_repositories_url: string & tags.Format<"uri-template">;
  user_search_url: string & tags.Format<"uri-template">;
};
