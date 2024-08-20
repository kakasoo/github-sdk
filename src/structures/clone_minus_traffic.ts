import { tags } from "typia";

import { traffic } from "./traffic";

/**
 * Clone Traffic
 *
 * @title Clone Traffic
 */
export type clone_minus_traffic = {
  count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 173;
    }>;
  uniques: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 128;
    }>;
  clones: traffic[];
};
