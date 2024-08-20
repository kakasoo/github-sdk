import { tags } from "typia";

import { gist_minus_history } from "./gist_minus_history";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { public_minus_user } from "./public_minus_user";
import { simple_minus_user } from "./simple_minus_user";

/**
 * Gist Simple
 *
 * @title Gist Simple
 */
export type gist_minus_simple = {
  forks?:
    | {
        id?: string;
        url?: string & tags.Format<"uri">;
        user?: public_minus_user;
        created_at?: string & tags.Format<"date-time">;
        updated_at?: string & tags.Format<"date-time">;
      }[]
    | null;
  history?: gist_minus_history[] | null;
  /**
   * Gist
   *
   * @title Gist
   */
  fork_of?: {
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
    owner?: nullable_minus_simple_minus_user;
    truncated?: boolean;
    forks?: any[];
    history?: any[];
  } | null;
  url?: string;
  forks_url?: string;
  commits_url?: string;
  id?: string;
  node_id?: string;
  git_pull_url?: string;
  git_push_url?: string;
  html_url?: string;
  files?: {
    [key: string]: {
      filename?: string;
      type?: string;
      language?: string;
      raw_url?: string;
      size?: number & tags.Type<"int32">;
      truncated?: boolean;
      content?: string;
    } | null;
  };
  public?: boolean;
  created_at?: string;
  updated_at?: string;
  description?: string | null;
  comments?: number & tags.Type<"int32">;
  user?: string | null;
  comments_url?: string;
  owner?: simple_minus_user;
  truncated?: boolean;
};
