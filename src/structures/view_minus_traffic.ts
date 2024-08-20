import { tags } from "typia";

import { traffic } from "./traffic";

/**
 * View Traffic
 *
 * @title View Traffic
 */
export type view_minus_traffic = {
  count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 14850;
    }>;
  uniques: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 3782;
    }>;
  views: traffic[];
};
