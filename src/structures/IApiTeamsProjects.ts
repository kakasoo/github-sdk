import { tags } from "typia";

export namespace IApiTeamsProjects {
  export type GetHeader = {
    /**
     * The unique identifier of the team.
     */
    team_id: number & tags.Type<"int32">;
    /**
     * The unique identifier of the project.
     */
    project_id: number & tags.Type<"int32">;
  };
  export type PutHeader = {
    /**
     * The unique identifier of the team.
     */
    team_id: number & tags.Type<"int32">;
    /**
     * The unique identifier of the project.
     */
    project_id: number & tags.Type<"int32">;
  };
  export type DeleteHeader = {
    /**
     * The unique identifier of the team.
     */
    team_id: number & tags.Type<"int32">;
    /**
     * The unique identifier of the project.
     */
    project_id: number & tags.Type<"int32">;
  };
}
