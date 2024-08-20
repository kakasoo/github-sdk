import { tags } from "typia";

/**
 * A version of a software package
 *
 * @title Package Version
 */
export type package_minus_version = {
  /**
   * Unique identifier of the package version.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  /**
   * The name of the package version.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "latest";
    }>;
  url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/github/packages/container/super-linter/versions/786068";
    }>;
  package_html_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/orgs/github/packages/container/package/super-linter";
    }>;
  html_url?: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/orgs/github/packages/container/super-linter/786068";
    }>;
  license?: string &
    tags.JsonSchemaPlugin<{
      example: "MIT";
    }>;
  description?: string;
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
  deleted_at?: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2014-03-03T18:58:10Z";
    }>;
  /**
   * @title Package Version Metadata
   */
  metadata?: {
    package_type:
      | "npm"
      | "maven"
      | "rubygems"
      | "docker"
      | "nuget"
      | "container";
    /**
     * @title Container Metadata
     */
    container?: {
      tags: string[];
    };
    /**
     * @title Docker Metadata
     */
    docker?: {
      tag?: string[];
    };
  };
};
