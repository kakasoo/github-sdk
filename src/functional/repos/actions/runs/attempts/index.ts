import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposActionsRunsAttempts } from "../../../../../structures/IApiReposActionsRunsAttempts";
import { workflow_minus_run } from "../../../../../structures/workflow_minus_run";

export * as jobs from "./jobs";
export * as logs from "./logs";
/**
 * Get a workflow run attempt.
 * Gets a specific workflow run attempt.
 *
 * Anyone with read access to the repository can use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/runs/:run_id/attempts/:attempt_number
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndRun_idAndAttempt_number(
  connection: IConnection<getByOwnerAndRepoAndRun_idAndAttempt_number.Headers>,
  owner: string,
  repo: string,
  run_id: string,
  attempt_number: string,
): Promise<getByOwnerAndRepoAndRun_idAndAttempt_number.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndRun_idAndAttempt_number.simulate(
        connection,
        owner,
        repo,
        run_id,
        attempt_number,
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
          ...getByOwnerAndRepoAndRun_idAndAttempt_number.METADATA,
          path: getByOwnerAndRepoAndRun_idAndAttempt_number.path(
            owner,
            repo,
            run_id,
            attempt_number,
          ),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndRun_idAndAttempt_number {
  export type Headers = IApiReposActionsRunsAttempts.GetHeader;
  export type Output = workflow_minus_run;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/actions/runs/:run_id/attempts/:attempt_number",
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
    attempt_number: string,
  ) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/runs/${encodeURIComponent(run_id ?? "null")}/attempts/${encodeURIComponent(attempt_number ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): workflow_minus_run => typia.random<workflow_minus_run>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndRun_idAndAttempt_number.Headers>,
    owner: string,
    repo: string,
    run_id: string,
    attempt_number: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndRun_idAndAttempt_number.path(
        owner,
        repo,
        run_id,
        attempt_number,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("run_id")(() => typia.assert(run_id));
      assert.param("attempt_number")(() => typia.assert(attempt_number));
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
