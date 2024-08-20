import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * A collection of related issues and pull requests.
 *
 * @title Milestone
 */
export type nullable_minus_milestone = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/milestones/1";
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/milestones/v1.0";
    }>;
  labels_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/milestones/1/labels";
    }>;
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1002604;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDk6TWlsZXN0b25lMTAwMjYwNA==";
    }>;
  /**
   * The number of the milestone.
   */
  number: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  /**
   * The state of the milestone.
   */
  state: "open" | "closed";
  /**
   * The title of the milestone.
   */
  title: string &
    tags.JsonSchemaPlugin<{
      example: "v1.0";
    }>;
  description:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "Tracking milestone for version 1.0";
        }>)
    | null;
  creator: nullable_minus_simple_minus_user;
  open_issues: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 4;
    }>;
  closed_issues: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 8;
    }>;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-04-10T20:09:31Z";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2014-03-03T18:58:10Z";
    }>;
  closed_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2013-02-12T13:22:01Z";
        }>)
    | null;
  due_on:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2012-10-09T23:39:01Z";
        }>)
    | null;
} | null;
