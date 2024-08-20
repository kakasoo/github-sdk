import { tags } from "typia";

export namespace IApiOrgsTeamsProjects {
  export type GetHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The slug of the team name.
     */
    team_slug: string;
    /**
     * The unique identifier of the project.
     */
    project_id: number & tags.Type<"int32">;
  };
  export type PutHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The slug of the team name.
     */
    team_slug: string;
    /**
     * The unique identifier of the project.
     */
    project_id: number & tags.Type<"int32">;
  };
  export type DeleteHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The slug of the team name.
     */
    team_slug: string;
    /**
     * The unique identifier of the project.
     */
    project_id: number & tags.Type<"int32">;
  };
}
