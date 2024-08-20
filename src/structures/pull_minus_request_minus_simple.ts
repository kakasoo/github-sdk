import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { nullable_minus_milestone } from "./nullable_minus_milestone";
import { simple_minus_user } from "./simple_minus_user";
import { team } from "./team";
import { repository } from "./repository";
import { link } from "./link";
import { author_minus_association } from "./author_minus_association";
import { auto_minus_merge } from "./auto_minus_merge";

/**
 * Pull Request Simple
 *
 * @title Pull Request Simple
 */
export type pull_minus_request_minus_simple = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/pulls/1347";
    }>;
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
      example: 1;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDExOlB1bGxSZXF1ZXN0MQ==";
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/pull/1347";
    }>;
  diff_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/pull/1347.diff";
    }>;
  patch_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/pull/1347.patch";
    }>;
  issue_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/issues/1347";
    }>;
  commits_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits";
    }>;
  review_comments_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments";
    }>;
  review_comment_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}";
    }>;
  comments_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments";
    }>;
  statuses_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e";
    }>;
  number: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1347;
    }>;
  state: string &
    tags.JsonSchemaPlugin<{
      example: "open";
    }>;
  locked: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  title: string &
    tags.JsonSchemaPlugin<{
      example: "new-feature";
    }>;
  user: nullable_minus_simple_minus_user;
  body:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "Please pull these awesome changes";
        }>)
    | null;
  labels: {
    id: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "int64";
      }>;
    node_id: string;
    url: string;
    name: string;
    description: string;
    color: string;
    default: boolean;
  }[];
  milestone: nullable_minus_milestone;
  active_lock_reason?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "too heated";
        }>)
    | null;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:01:12Z";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:01:12Z";
    }>;
  closed_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2011-01-26T19:01:12Z";
        }>)
    | null;
  merged_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2011-01-26T19:01:12Z";
        }>)
    | null;
  merge_commit_sha:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "e5bd3914e2e596debea16f433f57875b5b90bcd6";
        }>)
    | null;
  assignee: nullable_minus_simple_minus_user;
  assignees?: simple_minus_user[] | null;
  requested_reviewers?: simple_minus_user[] | null;
  requested_teams?: team[] | null;
  head: {
    label: string;
    ref: string;
    repo: repository;
    sha: string;
    user: nullable_minus_simple_minus_user;
  };
  base: {
    label: string;
    ref: string;
    repo: repository;
    sha: string;
    user: nullable_minus_simple_minus_user;
  };
  _links: {
    comments: link;
    commits: link;
    statuses: link;
    html: link;
    issue: link;
    review_comments: link;
    review_comment: link;
    self: link;
  };
  author_association: author_minus_association;
  auto_merge: auto_minus_merge;
  /**
   * Indicates whether or not the pull request is a draft.
   */
  draft?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
};
