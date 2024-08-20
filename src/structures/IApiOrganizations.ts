import { tags } from "typia";

export namespace IApiOrganizations {
  export type GetHeader = {
    /**
     * An organization ID. Only return organizations with an ID greater than this ID.
     */
    since?: number & tags.Type<"int32">;
    /**
     * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    per_page?: number & tags.Type<"int32"> & tags.Default<30>;
  };
}
