import { tags } from "typia";

export namespace IApiReposActionsRunnersLabels {
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
     * Unique identifier of the self-hosted runner.
     */
    runner_id: number & tags.Type<"int32">;
  };
  export type PutHeader = {
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
    /**
     * The name of a self-hosted runner's custom label.
     */
    name: string;
  };
}
