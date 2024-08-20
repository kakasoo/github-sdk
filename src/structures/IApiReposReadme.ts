export namespace IApiReposReadme {
  export type GetHeader = {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
  };
  export type GetQuery = {
    /**
     * The name of the commit/branch/tag. Default: the repository’s default branch.
     */
    ref?: string;
  };
}
