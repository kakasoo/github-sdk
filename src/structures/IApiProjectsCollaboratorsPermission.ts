import { tags } from "typia";

export namespace IApiProjectsCollaboratorsPermission {
  export type GetHeader = {
    /**
     * The unique identifier of the project.
     */
    project_id: number & tags.Type<"int32">;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
  };
}
