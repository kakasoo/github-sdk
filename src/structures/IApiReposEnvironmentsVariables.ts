export namespace IApiReposEnvironmentsVariables {
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
     * The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.
     */
    environment_name: string;
    /**
     * The name of the variable.
     */
    name: string;
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
     * The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.
     */
    environment_name: string;
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
     * The name of the variable.
     */
    name: string;
    /**
     * The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.
     */
    environment_name: string;
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
     * The name of the variable.
     */
    name: string;
    /**
     * The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.
     */
    environment_name: string;
  };
}
