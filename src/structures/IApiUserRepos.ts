import { tags } from "typia";

export namespace IApiUserRepos {
  export type GetHeader = {
    /**
     * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    per_page?: number & tags.Type<"int32"> & tags.Default<30>;
    /**
     * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    page?: number & tags.Type<"int32"> & tags.Default<1>;
    /**
     * Only show repositories updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    since?: string & tags.Format<"date-time">;
    /**
     * Only show repositories updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    before?: string & tags.Format<"date-time">;
  };
  export type GetQuery = {
    /**
     * Comma-separated list of values. Can include:
     *  * `owner`: Repositories that are owned by the authenticated user.
     *  * `collaborator`: Repositories that the user has been added to as a collaborator.
     *  * `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.
     */
    affiliation?: string &
      tags.Default<"owner,collaborator,organization_member">;
  };
}
