export namespace IApiReposCollaboratorsPermission {
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
}
