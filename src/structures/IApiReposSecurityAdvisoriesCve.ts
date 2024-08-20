export namespace IApiReposSecurityAdvisoriesCve {
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
     * The GHSA (GitHub Security Advisory) identifier of the advisory.
     */
    ghsa_id: string;
  };
}
