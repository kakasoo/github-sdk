import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { nullable_minus_minimal_minus_repository } from "./nullable_minus_minimal_minus_repository";

/**
 * A software package
 *
 * @title Package
 */
export type package = {
  /**
   * Unique identifier of the package.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  /**
   * The name of the package.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "super-linter";
    }>;
  package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
  url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/github/packages/container/super-linter";
    }>;
  html_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/orgs/github/packages/container/package/super-linter";
    }>;
  /**
   * The number of versions of the package.
   */
  version_count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  visibility: "private" | "public";
  owner?: nullable_minus_simple_minus_user;
  repository?: nullable_minus_minimal_minus_repository;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
};
