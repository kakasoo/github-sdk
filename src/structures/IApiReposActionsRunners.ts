import { tags } from "typia";

export namespace IApiReposActionsRunners {
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
     * Unique identifier of the self-hosted runner.
     */
    runner_id: number & tags.Type<"int32">;
  };
  export type GetQuery = {
    /**
     * The name of a self-hosted runner.
     */
    name?: string;
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
     * Unique identifier of the self-hosted runner.
     */
    runner_id: number & tags.Type<"int32">;
  };
}
