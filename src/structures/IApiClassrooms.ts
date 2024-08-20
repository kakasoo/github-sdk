import { tags } from "typia";

export namespace IApiClassrooms {
  export type GetHeader = {
    /**
     * The unique identifier of the classroom.
     */
    classroom_id: number & tags.Type<"int32">;
  };
}
