import { tags } from "typia";

import { minimal_minus_repository } from "./minimal_minus_repository";
import { nullable_minus_git_minus_user } from "./nullable_minus_git_minus_user";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { search_minus_result_minus_text_minus_matches } from "./search_minus_result_minus_text_minus_matches";
import { verification } from "./verification";

/**
 * Commit Search Result Item
 *
 * @title Commit Search Result Item
 */
export type commit_minus_search_minus_result_minus_item = {
  url: string & tags.Format<"uri">;
  sha: string;
  html_url: string & tags.Format<"uri">;
  comments_url: string & tags.Format<"uri">;
  commit: {
    author: {
      name: string;
      email: string;
      date: string & tags.Format<"date-time">;
    };
    committer: nullable_minus_git_minus_user;
    comment_count: number & tags.Type<"int32">;
    message: string;
    tree: {
      sha: string;
      url: string & tags.Format<"uri">;
    };
    url: string & tags.Format<"uri">;
    verification?: verification;
  };
  author: nullable_minus_simple_minus_user;
  committer: nullable_minus_git_minus_user;
  parents: {
    url?: string;
    html_url?: string;
    sha?: string;
  }[];
  repository: minimal_minus_repository;
  score: number;
  node_id: string;
  text_matches?: search_minus_result_minus_text_minus_matches;
};
