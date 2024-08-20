import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposActionsRunsRerunFailedJobs } from "../../../../../structures/IApiReposActionsRunsRerunFailedJobs";
import { body } from "../../../../../structures/body";
import { empty_minus_object } from "../../../../../structures/empty_minus_object";

/**
 * Re-run failed jobs from a workflow run.
 * Re-run all of the failed jobs and their dependent jobs in a workflow run using the `id` of the workflow run.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/runs/:run_id/rerun-failed-jobs
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepoAndRun_id(
  connection: IConnection<postByOwnerAndRepoAndRun_id.Headers>,
  owner: string,
  repo: string,
  run_id: string,
  body: postByOwnerAndRepoAndRun_id.Input,
): Promise<postByOwnerAndRepoAndRun_id.Output> {
  return !!connection.simulate
    ? postByOwnerAndRepoAndRun_id.simulate(
        connection,
        owner,
        repo,
        run_id,
        body,
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
          ...postByOwnerAndRepoAndRun_id.METADATA,
          path: postByOwnerAndRepoAndRun_id.path(owner, repo, run_id),
          status: null,
        },
        body,
      );
}
export namespace postByOwnerAndRepoAndRun_id {
  export type Headers = IApiReposActionsRunsRerunFailedJobs.PostHeader;
  export type Input = body;
  export type Output = empty_minus_object;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/actions/runs/:run_id/rerun-failed-jobs",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, run_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/runs/${encodeURIComponent(run_id ?? "null")}/rerun-failed-jobs`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): empty_minus_object => typia.random<empty_minus_object>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepoAndRun_id.Headers>,
    owner: string,
    repo: string,
    run_id: string,
    body: postByOwnerAndRepoAndRun_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepoAndRun_id.path(owner, repo, run_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("run_id")(() => typia.assert(run_id));
      assert.body(() => typia.assert(body));
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
