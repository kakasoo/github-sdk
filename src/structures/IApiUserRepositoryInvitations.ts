import { tags } from "typia";

export namespace IApiUserRepositoryInvitations {
  export type GetHeader = {
    /**
     * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    per_page?: number & tags.Type<"int32"> & tags.Default<30>;
    /**
     * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    page?: number & tags.Type<"int32"> & tags.Default<1>;
  };
  export type PatchHeader = {
    /**
     * The unique identifier of the invitation.
     */
    invitation_id: number & tags.Type<"int32">;
  };
  export type DeleteHeader = {
    /**
     * The unique identifier of the invitation.
     */
    invitation_id: number & tags.Type<"int32">;
  };
}
