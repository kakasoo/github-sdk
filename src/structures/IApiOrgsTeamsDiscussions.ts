import { tags } from "typia";

export namespace IApiOrgsTeamsDiscussions {
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
     * The number that identifies the discussion.
     */
    discussion_number: number & tags.Type<"int32">;
  };
  export type GetQuery = {
    /**
     * Pinned discussions only filter
     */
    pinned?: string;
  };
  export type PostHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The slug of the team name.
     */
    team_slug: string;
  };
  export type PatchHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The slug of the team name.
     */
    team_slug: string;
    /**
     * The number that identifies the discussion.
     */
    discussion_number: number & tags.Type<"int32">;
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
     * The number that identifies the discussion.
     */
    discussion_number: number & tags.Type<"int32">;
  };
}
