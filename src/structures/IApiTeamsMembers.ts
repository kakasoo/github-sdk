import { tags } from "typia";

export namespace IApiTeamsMembers {
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
  export type GetQuery = {};
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
