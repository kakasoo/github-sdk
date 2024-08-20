import { tags } from "typia";

/**
 * File Commit
 *
 * @title File Commit
 */
export type file_minus_commit = {
  content: {
    name?: string;
    path?: string;
    sha?: string;
    size?: number & tags.Type<"int32">;
    url?: string;
    html_url?: string;
    git_url?: string;
    download_url?: string;
    type?: string;
    _links?: {
      self?: string;
      git?: string;
      html?: string;
    };
  } | null;
  commit: {
    sha?: string;
    node_id?: string;
    url?: string;
    html_url?: string;
    author?: {
      date?: string;
      name?: string;
      email?: string;
    };
    committer?: {
      date?: string;
      name?: string;
      email?: string;
    };
    message?: string;
    tree?: {
      url?: string;
      sha?: string;
    };
    parents?: {
      url?: string;
      html_url?: string;
      sha?: string;
    }[];
    verification?: {
      verified?: boolean;
      reason?: string;
      signature?: string | null;
      payload?: string | null;
    };
  };
};
