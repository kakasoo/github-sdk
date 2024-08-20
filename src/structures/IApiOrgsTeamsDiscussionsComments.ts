import { tags } from "typia";

export namespace IApiOrgsTeamsDiscussionsComments {
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
    /**
     * The number that identifies the comment.
     */
    comment_number: number & tags.Type<"int32">;
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
    /**
     * The number that identifies the discussion.
     */
    discussion_number: number & tags.Type<"int32">;
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
    /**
     * The number that identifies the comment.
     */
    comment_number: number & tags.Type<"int32">;
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
    /**
     * The number that identifies the comment.
     */
    comment_number: number & tags.Type<"int32">;
  };
}
