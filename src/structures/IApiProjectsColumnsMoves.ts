import { tags } from "typia";

export namespace IApiProjectsColumnsMoves {
  export type PostHeader = {
    /**
     * The unique identifier of the column.
     */
    column_id: number & tags.Type<"int32">;
  };
}
