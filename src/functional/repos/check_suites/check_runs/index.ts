import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposCheckSuitesCheckRuns } from "../../../../structures/IApiReposCheckSuitesCheckRuns";
import { response } from "../../../../structures/response";

/**
 * List check runs in a check suite.
 * Lists check runs for a check suite using its `id`.
 *
 * > [!NOTE]
 * > The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.
 *
 * @tag checks
 * @path repos/:owner/:repo/check-suites/:check_suite_id/check-runs
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndCheck_suite_id(
  connection: IConnection<getByOwnerAndRepoAndCheck_suite_id.Headers>,
  owner: string,
  repo: string,
  check_suite_id: string,
  query: getByOwnerAndRepoAndCheck_suite_id.Query,
): Promise<getByOwnerAndRepoAndCheck_suite_id.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndCheck_suite_id.simulate(
        connection,
        owner,
        repo,
        check_suite_id,
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
          ...getByOwnerAndRepoAndCheck_suite_id.METADATA,
          path: getByOwnerAndRepoAndCheck_suite_id.path(
            owner,
            repo,
            check_suite_id,
            query,
          ),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndCheck_suite_id {
  export type Headers = IApiReposCheckSuitesCheckRuns.GetHeader;
  export type Query = IApiReposCheckSuitesCheckRuns.GetQuery;
  export type Output = response;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/check-suites/:check_suite_id/check-runs",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    owner: string,
    repo: string,
    check_suite_id: string,
    query: getByOwnerAndRepoAndCheck_suite_id.Query,
  ) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/check-suites/${encodeURIComponent(check_suite_id ?? "null")}/check-runs`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndCheck_suite_id.Headers>,
    owner: string,
    repo: string,
    check_suite_id: string,
    query: getByOwnerAndRepoAndCheck_suite_id.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndCheck_suite_id.path(
        owner,
        repo,
        check_suite_id,
        query,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("check_suite_id")(() => typia.assert(check_suite_id));
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
