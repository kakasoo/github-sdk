import { tags } from "typia";

/**
 * License Simple
 *
 * @title License Simple
 */
export type license_minus_simple = {
  key: string &
    tags.JsonSchemaPlugin<{
      example: "mit";
    }>;
  name: string &
    tags.JsonSchemaPlugin<{
      example: "MIT License";
    }>;
  url:
    | (string &
        tags.Format<"uri"> &
        tags.JsonSchemaPlugin<{
          example: "https://api.github.com/licenses/mit";
        }>)
    | null;
  spdx_id:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "MIT";
        }>)
    | null;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDc6TGljZW5zZW1pdA==";
    }>;
  html_url?: string & tags.Format<"uri">;
};
