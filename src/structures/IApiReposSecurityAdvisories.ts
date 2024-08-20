import { tags } from "typia";

export namespace IApiReposSecurityAdvisories {
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
     * The GHSA (GitHub Security Advisory) identifier of the advisory.
     */
    ghsa_id: string;
  };
  export type GetQuery = {
    /**
     * The number of advisories to return per page. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    per_page?: number &
      tags.Type<"int32"> &
      tags.Default<30> &
      tags.Minimum<1> &
      tags.Maximum<100>;
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
     * The GHSA (GitHub Security Advisory) identifier of the advisory.
     */
    ghsa_id: string;
  };
}
