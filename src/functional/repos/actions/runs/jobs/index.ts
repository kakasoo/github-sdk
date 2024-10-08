import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposActionsRunsJobs } from "../../../../../structures/IApiReposActionsRunsJobs";
import { response } from "../../../../../structures/response";

/**
 * List jobs for a workflow run.
 * Lists jobs for a workflow run. You can use parameters to narrow the list of results. For more information
 * about using parameters, see [Parameters](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#parameters).
 *
 * Anyone with read access to the repository can use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/runs/:run_id/jobs
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndRun_id(
  connection: IConnection<getByOwnerAndRepoAndRun_id.Headers>,
  owner: string,
  repo: string,
  run_id: string,
  query: getByOwnerAndRepoAndRun_id.Query,
): Promise<getByOwnerAndRepoAndRun_id.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndRun_id.simulate(
        connection,
        owner,
        repo,
        run_id,
        query,
      )
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOwnerAndRepoAndRun_id.METADATA,
          path: getByOwnerAndRepoAndRun_id.path(owner, repo, run_id, query),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndRun_id {
  export type Headers = IApiReposActionsRunsJobs.GetHeader;
  export type Query = IApiReposActionsRunsJobs.GetQuery;
  export type Output = response;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/actions/runs/:run_id/jobs",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    owner: string,
    repo: string,
    run_id: string,
    query: getByOwnerAndRepoAndRun_id.Query,
  ) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/runs/${encodeURIComponent(run_id ?? "null")}/jobs`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndRun_id.Headers>,
    owner: string,
    repo: string,
    run_id: string,
    query: getByOwnerAndRepoAndRun_id.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndRun_id.path(owner, repo, run_id, query),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("run_id")(() => typia.assert(run_id));
      assert.query(() => typia.assert(query));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
