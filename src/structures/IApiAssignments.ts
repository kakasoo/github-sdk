import { tags } from "typia";

export namespace IApiAssignments {
  export type GetHeader = {
    /**
     * The unique identifier of the classroom assignment.
     */
    assignment_id: number & tags.Type<"int32">;
  };
}
