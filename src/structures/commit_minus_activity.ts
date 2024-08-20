import { tags } from "typia";

/**
 * Commit Activity
 *
 * @title Commit Activity
 */
export type commit_minus_activity = {
  days: (number & tags.Type<"int32">)[] &
    tags.JsonSchemaPlugin<{
      example: [0, 3, 26, 20, 39, 1, 0];
    }>;
  total: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 89;
    }>;
  week: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1336280400;
    }>;
};
