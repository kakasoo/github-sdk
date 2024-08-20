import { tags } from "typia";

export namespace IApiTeamsDiscussions {
  export type GetHeader = {
    /**
     * The unique identifier of the team.
     */
    team_id: number & tags.Type<"int32">;
    /**
     * The number that identifies the discussion.
     */
    discussion_number: number & tags.Type<"int32">;
  };
  export type PostHeader = {
    /**
     * The unique identifier of the team.
     */
    team_id: number & tags.Type<"int32">;
  };
  export type PatchHeader = {
    /**
     * The unique identifier of the team.
     */
    team_id: number & tags.Type<"int32">;
    /**
     * The number that identifies the discussion.
     */
    discussion_number: number & tags.Type<"int32">;
  };
  export type DeleteHeader = {
    /**
     * The unique identifier of the team.
     */
    team_id: number & tags.Type<"int32">;
    /**
     * The number that identifies the discussion.
     */
    discussion_number: number & tags.Type<"int32">;
  };
}
