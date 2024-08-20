import { tags } from "typia";

export namespace IApiAssignmentsGrades {
  export type GetHeader = {
    /**
     * The unique identifier of the classroom assignment.
     */
    assignment_id: number & tags.Type<"int32">;
  };
}
