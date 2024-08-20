import { tags } from "typia";

export namespace IApiOrgsCodeSecurityConfigurations {
  export type GetHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the code security configuration.
     */
    configuration_id: number & tags.Type<"int32">;
  };
  export type GetQuery = {
    /**
     * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    per_page?: number & tags.Type<"int32"> & tags.Default<30>;
  };
  export type PostHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
  };
  export type PatchHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the code security configuration.
     */
    configuration_id: number & tags.Type<"int32">;
  };
  export type DeleteHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the code security configuration.
     */
    configuration_id: number & tags.Type<"int32">;
  };
}
