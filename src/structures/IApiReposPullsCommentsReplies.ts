import { tags } from "typia";

export namespace IApiReposPullsCommentsReplies {
  export type PostHeader = {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
    /**
     * The number that identifies the pull request.
     */
    pull_number: number & tags.Type<"int32">;
    /**
     * The unique identifier of the comment.
     */
    comment_id: number & tags.Type<"int32">;
  };
}
