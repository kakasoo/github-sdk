import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * Contributor Activity
 *
 * @title Contributor Activity
 */
export type contributor_minus_activity = {
  author: nullable_minus_simple_minus_user;
  total: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 135;
    }>;
  weeks: {
    w?: number & tags.Type<"int32">;
    a?: number & tags.Type<"int32">;
    d?: number & tags.Type<"int32">;
    c?: number & tags.Type<"int32">;
  }[] &
    tags.JsonSchemaPlugin<{
      example: [
        {
          w: "1367712000";
          a: 6898;
          d: 77;
          c: 10;
        },
      ];
    }>;
};
