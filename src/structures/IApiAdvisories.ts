import { tags } from "typia";

export namespace IApiAdvisories {
  export type GetHeader = {
    /**
     * The GHSA (GitHub Security Advisory) identifier of the advisory.
     */
    ghsa_id: string;
  };
  export type GetQuery = {
    /**
     * If specified, only advisories with this GHSA (GitHub Security Advisory) identifier will be returned.
     */
    ghsa_id?: string;
    /**
     * If specified, only advisories with this CVE (Common Vulnerabilities and Exposures) identifier will be returned.
     */
    cve_id?: string;
    /**
     * Whether to only return advisories that have been withdrawn.
     */
    is_withdrawn?: boolean;
    /**
     * If specified, only return advisories that were published on a date or date range.
     *
     * For more information on the syntax of the date range, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
     */
    published?: string;
    /**
     * If specified, only return advisories that were updated on a date or date range.
     *
     * For more information on the syntax of the date range, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
     */
    updated?: string;
    /**
     * If specified, only show advisories that were updated or published on a date or date range.
     *
     * For more information on the syntax of the date range, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
     */
    modified?: string;
    /**
     * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    per_page?: number &
      tags.Type<"int32"> &
      tags.Default<30> &
      tags.Minimum<1> &
      tags.Maximum<100>;
  };
}
