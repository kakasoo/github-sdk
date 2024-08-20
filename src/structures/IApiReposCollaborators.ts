export namespace IApiReposCollaborators {
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
     * The handle for the GitHub user account.
     */
    username: string;
  };
  export type GetQuery = {};
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
     * The handle for the GitHub user account.
     */
    username: string;
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
     * The handle for the GitHub user account.
     */
    username: string;
  };
}
