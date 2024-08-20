import { tags } from "typia";

export namespace IApiOrgsInvitations {
  export type GetHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    per_page?: number & tags.Type<"int32"> & tags.Default<30>;
    /**
     * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    page?: number & tags.Type<"int32"> & tags.Default<1>;
  };
  export type GetQuery = {};
  export type PostHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
  };
  export type DeleteHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the invitation.
     */
    invitation_id: number & tags.Type<"int32">;
  };
}