import { tags } from "typia";

export namespace IApiReposPulls {
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
     * The number that identifies the pull request.
     */
    pull_number: number & tags.Type<"int32">;
  };
  export type GetQuery = {
    /**
     * Filter pulls by head user or head organization and branch name in the format of `user:ref-name` or `organization:ref-name`. For example: `github:new-script-format` or `octocat:test-branch`.
     */
    head?: string;
    /**
     * Filter pulls by base branch name. Example: `gh-pages`.
     */
    base?: string;
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
  export type PatchHeader = {
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
  };
}
