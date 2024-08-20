import { tags } from "typia";

export namespace IApiReposActionsWorkflowsRuns {
  export type GetHeader = {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository without the `.git` extension. The name is not case sensitive.
     */
    repo: string;
    /**
     * Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
     */
    actor?: string;
    /**
     * Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
     */
    branch?: string;
    /**
     * Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://docs.github.com/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."
     */
    event?: string;
    /**
     * The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    per_page?: number & tags.Type<"int32"> & tags.Default<30>;
    /**
     * The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."
     */
    page?: number & tags.Type<"int32"> & tags.Default<1>;
    /**
     * Returns workflow runs created within the given date-time range. For more information on the syntax, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
     */
    created?: string & tags.Format<"date-time">;
    /**
     * If `true` pull requests are omitted from the response (empty array).
     */
    exclude_pull_requests?: boolean;
    /**
     * Returns workflow runs with the `check_suite_id` that you specify.
     */
    check_suite_id?: number & tags.Type<"int32">;
    /**
     * Only returns workflow runs that are associated with the specified `head_sha`.
     */
    head_sha?: string;
  };
}
