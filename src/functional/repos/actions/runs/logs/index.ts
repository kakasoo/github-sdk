import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposActionsRunsLogs } from "../../../../../structures/IApiReposActionsRunsLogs";

/**
 * Download workflow run logs.
 * Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
 * `Location:` in the response header to find the URL for the download.
 *
 * Anyone with read access to the repository can use this endpoint.
 *
 * If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/runs/:run_id/logs
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndRun_id(
  connection: IConnection<getByOwnerAndRepoAndRun_id.Headers>,
  owner: string,
  repo: string,
  run_id: string,
): Promise<void> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndRun_id.simulate(connection, owner, repo, run_id)
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
          path: getByOwnerAndRepoAndRun_id.path(owner, repo, run_id),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndRun_id {
  export type Headers = IApiReposActionsRunsLogs.GetHeader;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/actions/runs/:run_id/logs",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, run_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/runs/${encodeURIComponent(run_id ?? "null")}/logs`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndRun_id.Headers>,
    owner: string,
    repo: string,
    run_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndRun_id.path(owner, repo, run_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("run_id")(() => typia.assert(run_id));
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
/**
 * Delete workflow run logs.
 * Deletes all logs for a workflow run.
 *
 * OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/runs/:run_id/logs
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOwnerAndRepoAndRun_id(
  connection: IConnection<eraseByOwnerAndRepoAndRun_id.Headers>,
  owner: string,
  repo: string,
  run_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOwnerAndRepoAndRun_id.simulate(connection, owner, repo, run_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByOwnerAndRepoAndRun_id.METADATA,
          path: eraseByOwnerAndRepoAndRun_id.path(owner, repo, run_id),
          status: null,
        },
      );
}
export namespace eraseByOwnerAndRepoAndRun_id {
  export type Headers = IApiReposActionsRunsLogs.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/repos/:owner/:repo/actions/runs/:run_id/logs",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, run_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/runs/${encodeURIComponent(run_id ?? "null")}/logs`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOwnerAndRepoAndRun_id.Headers>,
    owner: string,
    repo: string,
    run_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOwnerAndRepoAndRun_id.path(owner, repo, run_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("run_id")(() => typia.assert(run_id));
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
