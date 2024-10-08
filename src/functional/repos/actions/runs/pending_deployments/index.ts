import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposActionsRunsPendingDeployments } from "../../../../../structures/IApiReposActionsRunsPendingDeployments";
import { body } from "../../../../../structures/body";
import { deployment } from "../../../../../structures/deployment";
import { pending_minus_deployment } from "../../../../../structures/pending_minus_deployment";

/**
 * Get pending deployments for a workflow run.
 * Get all deployment environments for a workflow run that are waiting for protection rules to pass.
 *
 * Anyone with read access to the repository can use this endpoint.
 *
 * If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/runs/:run_id/pending_deployments
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
  export type Headers = IApiReposActionsRunsPendingDeployments.GetHeader;
  export type Output = pending_minus_deployment[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/actions/runs/:run_id/pending_deployments",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, run_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/runs/${encodeURIComponent(run_id ?? "null")}/pending_deployments`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): pending_minus_deployment[] => typia.random<pending_minus_deployment[]>(g);
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
 * Review pending deployments for a workflow run.
 * Approve or reject pending deployments that are waiting on approval by a required reviewer.
 *
 * Required reviewers with read access to the repository contents and deployments can use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/runs/:run_id/pending_deployments
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
  export type Headers = IApiReposActionsRunsPendingDeployments.PostHeader;
  export type Input = body;
  export type Output = deployment[];

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/actions/runs/:run_id/pending_deployments",
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
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/runs/${encodeURIComponent(run_id ?? "null")}/pending_deployments`;
  export const random = (g?: Partial<typia.IRandomGenerator>): deployment[] =>
    typia.random<deployment[]>(g);
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
