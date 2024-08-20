import { tags } from "typia";

export namespace IApiReposDeployments {
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
     * deployment_id parameter
     */
    deployment_id: number & tags.Type<"int32">;
  };
  export type GetQuery = {
    /**
     * The SHA recorded at creation time.
     */
    sha?: string & tags.Default<"none">;
    /**
     * The name of the ref. This can be a branch, tag, or SHA.
     */
    ref?: string & tags.Default<"none">;
    /**
     * The name of the task for the deployment (e.g., `deploy` or `deploy:migrations`).
     */
    task?: string & tags.Default<"none">;
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
     * deployment_id parameter
     */
    deployment_id: number & tags.Type<"int32">;
  };
}
