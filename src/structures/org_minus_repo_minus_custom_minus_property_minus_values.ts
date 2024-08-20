import { tags } from "typia";

import { custom_minus_property_minus_value } from "./custom_minus_property_minus_value";

/**
 * List of custom property values for a repository
 *
 * @title Organization Repository Custom Property Values
 */
export type org_minus_repo_minus_custom_minus_property_minus_values = {
  repository_id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1296269;
    }>;
  repository_name: string &
    tags.JsonSchemaPlugin<{
      example: "Hello-World";
    }>;
  repository_full_name: string &
    tags.JsonSchemaPlugin<{
      example: "octocat/Hello-World";
    }>;
  /**
   * List of custom property names and associated values
   */
  properties: custom_minus_property_minus_value[];
};
