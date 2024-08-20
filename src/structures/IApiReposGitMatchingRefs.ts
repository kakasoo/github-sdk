export namespace IApiReposGitMatchingRefs {
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
     * The Git reference. For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.
     */
    ref: string;
  };
}
