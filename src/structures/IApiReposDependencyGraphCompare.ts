export namespace IApiReposDependencyGraphCompare {
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
     * The full path, relative to the repository root, of the dependency manifest file.
     */
    name?: string;
  };
}
