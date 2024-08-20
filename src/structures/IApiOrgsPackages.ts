import { tags } from "typia";

export namespace IApiOrgsPackages {
  export type GetHeader = {
    /**
     * The name of the package.
     */
    package_name: string;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
  };
  export type GetQuery = {
    /**
     * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    page?: number & tags.Type<"int32"> & tags.Default<1>;
    /**
     * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    per_page?: number & tags.Type<"int32"> & tags.Default<30>;
  };
  export type DeleteHeader = {
    /**
     * The name of the package.
     */
    package_name: string;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
  };
}
