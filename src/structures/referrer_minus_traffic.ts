import { tags } from "typia";

/**
 * Referrer Traffic
 *
 * @title Referrer Traffic
 */
export type referrer_minus_traffic = {
  referrer: string &
    tags.JsonSchemaPlugin<{
      example: "Google";
    }>;
  count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 4;
    }>;
  uniques: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 3;
    }>;
};
