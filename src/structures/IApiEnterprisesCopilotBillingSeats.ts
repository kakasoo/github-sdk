import { tags } from "typia";

export namespace IApiEnterprisesCopilotBillingSeats {
  export type GetHeader = {
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    page?: number & tags.Type<"int32"> & tags.Default<1>;
  };
  export type GetQuery = {
    /**
     * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    per_page?: number & tags.Type<"int32"> & tags.Default<50>;
  };
}
