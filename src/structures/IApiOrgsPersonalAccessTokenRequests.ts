import { tags } from "typia";

export namespace IApiOrgsPersonalAccessTokenRequests {
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
    /**
     * A list of owner usernames to use to filter the results.
     */
    owner?: string[] &
      tags.MaxItems<10> &
      tags.JsonSchemaPlugin<{
        example: "owner[]=octocat1,owner[]=octocat2";
      }>;
    /**
     * The name of the repository to use to filter the results.
     */
    repository?: string &
      tags.JsonSchemaPlugin<{
        example: "Hello-World";
      }>;
    /**
     * The permission to use to filter the results.
     */
    permission?: string &
      tags.JsonSchemaPlugin<{
        example: "issues_read";
      }>;
    /**
     * Only show fine-grained personal access tokens used before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    last_used_before?: string & tags.Format<"date-time">;
    /**
     * Only show fine-grained personal access tokens used after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    last_used_after?: string & tags.Format<"date-time">;
  };
  export type PostHeader = {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
  };
}
