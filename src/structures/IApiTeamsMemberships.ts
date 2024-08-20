import { tags } from "typia";

export namespace IApiTeamsMemberships {
  export type GetHeader = {
    /**
     * The unique identifier of the team.
     */
    team_id: number & tags.Type<"int32">;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
  };
  export type PutHeader = {
    /**
     * The unique identifier of the team.
     */
    team_id: number & tags.Type<"int32">;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
  };
  export type DeleteHeader = {
    /**
     * The unique identifier of the team.
     */
    team_id: number & tags.Type<"int32">;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
  };
}
