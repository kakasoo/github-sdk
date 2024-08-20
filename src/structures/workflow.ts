import { tags } from "typia";

/**
 * A GitHub Actions workflow
 *
 * @title Workflow
 */
export type workflow = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 5;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDg6V29ya2Zsb3cxMg==";
    }>;
  name: string &
    tags.JsonSchemaPlugin<{
      example: "CI";
    }>;
  path: string &
    tags.JsonSchemaPlugin<{
      example: "ruby.yaml";
    }>;
  state:
    | "active"
    | "deleted"
    | "disabled_fork"
    | "disabled_inactivity"
    | "disabled_manually";
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2019-12-06T14:20:20.000Z";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2019-12-06T14:20:20.000Z";
    }>;
  url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/actions/setup-ruby/workflows/5";
    }>;
  html_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/actions/setup-ruby/blob/master/.github/workflows/ruby.yaml";
    }>;
  badge_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/actions/setup-ruby/workflows/CI/badge.svg";
    }>;
  deleted_at?: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2019-12-06T14:20:20.000Z";
    }>;
};
