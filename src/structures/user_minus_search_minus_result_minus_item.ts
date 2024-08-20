import { tags } from "typia";

import { search_minus_result_minus_text_minus_matches } from "./search_minus_result_minus_text_minus_matches";

/**
 * User Search Result Item
 *
 * @title User Search Result Item
 */
export type user_minus_search_minus_result_minus_item = {
  login: string;
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  node_id: string;
  avatar_url: string & tags.Format<"uri">;
  gravatar_id: string | null;
  url: string & tags.Format<"uri">;
  html_url: string & tags.Format<"uri">;
  followers_url: string & tags.Format<"uri">;
  subscriptions_url: string & tags.Format<"uri">;
  organizations_url: string & tags.Format<"uri">;
  repos_url: string & tags.Format<"uri">;
  received_events_url: string & tags.Format<"uri">;
  type: string;
  score: number;
  following_url: string;
  gists_url: string;
  starred_url: string;
  events_url: string;
  public_repos?: number & tags.Type<"int32">;
  public_gists?: number & tags.Type<"int32">;
  followers?: number & tags.Type<"int32">;
  following?: number & tags.Type<"int32">;
  created_at?: string & tags.Format<"date-time">;
  updated_at?: string & tags.Format<"date-time">;
  name?: string | null;
  bio?: string | null;
  email?: (string & tags.Format<"email">) | null;
  location?: string | null;
  site_admin: boolean;
  hireable?: boolean | null;
  text_matches?: search_minus_result_minus_text_minus_matches;
  blog?: string | null;
  company?: string | null;
  suspended_at?: (string & tags.Format<"date-time">) | null;
};
