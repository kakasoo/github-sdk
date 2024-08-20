import { tags } from "typia";

/**
 * Tag protection
 *
 * @title Tag protection
 */
export type tag_minus_protection = {
  id?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 2;
    }>;
  created_at?: string &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:01:12Z";
    }>;
  updated_at?: string &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:01:12Z";
    }>;
  enabled?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  pattern: string &
    tags.JsonSchemaPlugin<{
      example: "v1.*";
    }>;
};
