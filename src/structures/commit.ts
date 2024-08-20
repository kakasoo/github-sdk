import { tags } from "typia";

import { diff_minus_entry } from "./diff_minus_entry";
import { empty_minus_object } from "./empty_minus_object";
import { nullable_minus_git_minus_user } from "./nullable_minus_git_minus_user";
import { simple_minus_user } from "./simple_minus_user";
import { verification } from "./verification";

/**
 * Commit
 *
 * @title Commit
 */
export type commit = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e";
    }>;
  sha: string &
    tags.JsonSchemaPlugin<{
      example: "6dcb09b5b57875f334f61aebed695e2e4193db5e";
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ==";
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e";
    }>;
  comments_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments";
    }>;
  commit: {
    url: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e";
      }>;
    author: nullable_minus_git_minus_user;
    committer: nullable_minus_git_minus_user;
    message: string &
      tags.JsonSchemaPlugin<{
        example: "Fix all the bugs";
      }>;
    comment_count: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        example: 0;
      }>;
    tree: {
      sha: string &
        tags.JsonSchemaPlugin<{
          example: "827efc6d56897b048c772eb4087f854f46256132";
        }>;
      url: string &
        tags.Format<"uri"> &
        tags.JsonSchemaPlugin<{
          example: "https://api.github.com/repos/octocat/Hello-World/tree/827efc6d56897b048c772eb4087f854f46256132";
        }>;
    };
    verification?: verification;
  };
  author: simple_minus_user | empty_minus_object | null;
  committer: simple_minus_user | empty_minus_object | null;
  parents: {
    sha: string &
      tags.JsonSchemaPlugin<{
        example: "7638417db6d59f3c431d3e1f261cc637155684cd";
      }>;
    url: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/commits/7638417db6d59f3c431d3e1f261cc637155684cd";
      }>;
    html_url?: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://github.com/octocat/Hello-World/commit/7638417db6d59f3c431d3e1f261cc637155684cd";
      }>;
  }[];
  stats?: {
    additions?: number & tags.Type<"int32">;
    deletions?: number & tags.Type<"int32">;
    total?: number & tags.Type<"int32">;
  };
  files?: diff_minus_entry[];
};
