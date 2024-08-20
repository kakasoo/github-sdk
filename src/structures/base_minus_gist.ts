import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { simple_minus_user } from "./simple_minus_user";

/**
 * Base Gist
 *
 * @title Base Gist
 */
export type base_minus_gist = {
  url: string & tags.Format<"uri">;
  forks_url: string & tags.Format<"uri">;
  commits_url: string & tags.Format<"uri">;
  id: string;
  node_id: string;
  git_pull_url: string & tags.Format<"uri">;
  git_push_url: string & tags.Format<"uri">;
  html_url: string & tags.Format<"uri">;
  files: {
    [key: string]: {
      filename?: string;
      type?: string;
      language?: string;
      raw_url?: string;
      size?: number & tags.Type<"int32">;
    };
  };
  public: boolean;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
  description: string | null;
  comments: number & tags.Type<"int32">;
  user: nullable_minus_simple_minus_user;
  comments_url: string & tags.Format<"uri">;
  owner?: simple_minus_user;
  truncated?: boolean;
  forks?: any[];
  history?: any[];
};
