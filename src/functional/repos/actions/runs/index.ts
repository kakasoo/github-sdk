import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposActionsRuns } from "../../../../structures/IApiReposActionsRuns";
import { response } from "../../../../structures/response";
import { workflow_minus_run } from "../../../../structures/workflow_minus_run";
export * as approvals from "./approvals";
export * as approve from "./approve";
export * as artifacts from "./artifacts";
export * as attempts from "./attempts";
export * as cancel from "./cancel";
export * as deployment_protection_rule from "./deployment_protection_rule";
export * as force_cancel from "./force_cancel";
export * as jobs from "./jobs";
export * as logs from "./logs";
export * as pending_deployments from "./pending_deployments";
export * as rerun from "./rerun";
export * as rerun_failed_jobs from "./rerun_failed_jobs";
export * as timing from "./timing";
/**
 * List workflow runs for a repository.
 * Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#parameters).
 *
 * Anyone with read access to the repository can use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
 *
 * This API will return up to 1,000 results for each search when using the following parameters: `actor`, `branch`, `check_suite_id`, `created`, `event`, `head_sha`, `status`.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/runs
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepo(
  connection: IConnection<getByOwnerAndRepo.Headers>,
  owner: string,
  repo: string,
): Promise<getByOwnerAndRepo.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepo.simulate(connection, owner, repo)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOwnerAndRepo.METADATA,
          path: getByOwnerAndRepo.path(owner, repo),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepo {
  export type Headers = IApiReposActionsRuns.GetHeader;
  export type Output = response;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/actions/runs",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/runs`;
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepo.Headers>,
    owner: string,
    repo: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepo.path(owner, repo),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
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
 * Get a workflow run.
 * Gets a specific workflow run.
 *
 * Anyone with read access to the repository can use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/runs/:run_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndRun_id(
  connection: IConnection<getByOwnerAndRepoAndRun_id.Headers>,
  owner: string,
  repo: string,
  run_id: string,
): Promise<getByOwnerAndRepoAndRun_id.Output> {
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
  export type Headers = IApiReposActionsRuns.GetHeader;
  export type Output = workflow_minus_run;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/actions/runs/:run_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, run_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/runs/${encodeURIComponent(run_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): workflow_minus_run => typia.random<workflow_minus_run>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndRun_id.Headers>,
    owner: string,
    repo: string,
    run_id: string,
  ): Output => {
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
 * Delete a workflow run.
 * Deletes a specific workflow run.
 *
 * Anyone with write access to the repository can use this endpoint.
 *
 * If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/runs/:run_id
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
  export type Headers = IApiReposActionsRuns.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/repos/:owner/:repo/actions/runs/:run_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, run_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/runs/${encodeURIComponent(run_id ?? "null")}`;
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