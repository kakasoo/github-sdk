import { tags } from "typia";

export namespace IApiProjects {
  export type GetHeader = {
    /**
     * The unique identifier of the project.
     */
    project_id: number & tags.Type<"int32">;
  };
  export type PatchHeader = {
    /**
     * The unique identifier of the project.
     */
    project_id: number & tags.Type<"int32">;
  };
  export type DeleteHeader = {
    /**
     * The unique identifier of the project.
     */
    project_id: number & tags.Type<"int32">;
  };
}
