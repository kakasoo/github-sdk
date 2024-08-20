import { tags } from "typia";

export namespace IApiEnterprisesDependabotAlerts {
  export type GetHeader = {
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * A comma-separated list of states. If specified, only alerts with these states will be returned.
     *
     * Can be: `auto_dismissed`, `dismissed`, `fixed`, `open`
     */
    state?: string;
    /**
     * A comma-separated list of severities. If specified, only alerts with these severities will be returned.
     *
     * Can be: `low`, `medium`, `high`, `critical`
     */
    severity?: string;
    /**
     * A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.
     *
     * Can be: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `pub`, `rubygems`, `rust`
     */
    ecosystem?: string;
    /**
     * A comma-separated list of package names. If specified, only alerts for these packages will be returned.
     */
    package?: string;
    /**
     * A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    before?: string;
    /**
     * A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    after?: string;
    /**
     * **Deprecated**. The number of results per page (max 100), starting from the first matching result.
     * This parameter must not be used in combination with `last`.
     * Instead, use `per_page` in combination with `after` to fetch the first page of results.
     */
    first?: number &
      tags.Type<"int32"> &
      tags.Default<30> &
      tags.Minimum<1> &
      tags.Maximum<100>;
    /**
     * **Deprecated**. The number of results per page (max 100), starting from the last matching result.
     * This parameter must not be used in combination with `first`.
     * Instead, use `per_page` in combination with `before` to fetch the last page of results.
     */
    last?: number & tags.Type<"int32"> & tags.Minimum<1> & tags.Maximum<100>;
    /**
     * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    per_page?: number & tags.Type<"int32"> & tags.Default<30>;
  };
}
