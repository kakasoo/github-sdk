import { tags } from "typia";

export namespace IApiGistsComments {
  export type GetHeader = {
    /**
     * The unique identifier of the gist.
     */
    gist_id: string;
    /**
     * The unique identifier of the comment.
     */
    comment_id: number & tags.Type<"int32">;
  };
  export type PostHeader = {
    /**
     * The unique identifier of the gist.
     */
    gist_id: string;
  };
  export type PatchHeader = {
    /**
     * The unique identifier of the gist.
     */
    gist_id: string;
    /**
     * The unique identifier of the comment.
     */
    comment_id: number & tags.Type<"int32">;
  };
  export type DeleteHeader = {
    /**
     * The unique identifier of the gist.
     */
    gist_id: string;
    /**
     * The unique identifier of the comment.
     */
    comment_id: number & tags.Type<"int32">;
  };
}
