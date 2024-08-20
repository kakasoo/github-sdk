import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposActionsWorkflowsEnable } from "../../../../../structures/IApiReposActionsWorkflowsEnable";

/**
 * Enable a workflow.
 * Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
 *
 * OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/workflows/:workflow_id/enable
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOwnerAndRepoAndWorkflow_id(
  connection: IConnection<putByOwnerAndRepoAndWorkflow_id.Headers>,
  owner: string,
  repo: string,
  workflow_id: string,
): Promise<void> {
  return !!connection.simulate
    ? putByOwnerAndRepoAndWorkflow_id.simulate(
        connection,
        owner,
        repo,
        workflow_id,
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
          ...putByOwnerAndRepoAndWorkflow_id.METADATA,
          path: putByOwnerAndRepoAndWorkflow_id.path(owner, repo, workflow_id),
          status: null,
        },
      );
}
export namespace putByOwnerAndRepoAndWorkflow_id {
  export type Headers = IApiReposActionsWorkflowsEnable.PutHeader;

  export const METADATA = {
    method: "PUT",
    path: "/repos/:owner/:repo/actions/workflows/:workflow_id/enable",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, workflow_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/workflows/${encodeURIComponent(workflow_id ?? "null")}/enable`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<putByOwnerAndRepoAndWorkflow_id.Headers>,
    owner: string,
    repo: string,
    workflow_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByOwnerAndRepoAndWorkflow_id.path(owner, repo, workflow_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("workflow_id")(() => typia.assert(workflow_id));
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
