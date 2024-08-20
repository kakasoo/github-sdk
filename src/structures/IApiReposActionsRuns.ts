import { tags } from "typia";

export namespace IApiReposActionsRuns {
  export type GetHeader = {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
    /**
     * The unique identifier of the workflow run.
     */
    run_id: number & tags.Type<"int32">;
    /**
     * If `true` pull requests are omitted from the response (empty array).
     */
    exclude_pull_requests?: boolean;
  };
  export type DeleteHeader = {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
    /**
     * The unique identifier of the workflow run.
     */
    run_id: number & tags.Type<"int32">;
  };
}
