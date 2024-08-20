import { tags } from "typia";

/**
 * Key
 *
 * @title Key
 */
export type key = {
  key: string;
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  url: string;
  title: string;
  created_at: string & tags.Format<"date-time">;
  verified: boolean;
  read_only: boolean;
};
