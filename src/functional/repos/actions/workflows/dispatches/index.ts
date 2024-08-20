import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposActionsWorkflowsDispatches } from "../../../../../structures/IApiReposActionsWorkflowsDispatches";
import { body } from "../../../../../structures/body";
/**
 * Create a workflow dispatch event.
 * You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
 *
 * You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."
 *
 * OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/workflows/:workflow_id/dispatches
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepoAndWorkflow_id(
  connection: IConnection<postByOwnerAndRepoAndWorkflow_id.Headers>,
  owner: string,
  repo: string,
  workflow_id: string,
  body: postByOwnerAndRepoAndWorkflow_id.Input,
): Promise<void> {
  return !!connection.simulate
    ? postByOwnerAndRepoAndWorkflow_id.simulate(
        connection,
        owner,
        repo,
        workflow_id,
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
          ...postByOwnerAndRepoAndWorkflow_id.METADATA,
          path: postByOwnerAndRepoAndWorkflow_id.path(owner, repo, workflow_id),
          status: null,
        },
        body,
      );
}
export namespace postByOwnerAndRepoAndWorkflow_id {
  export type Headers = IApiReposActionsWorkflowsDispatches.PostHeader;
  export type Input = body;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/actions/workflows/:workflow_id/dispatches",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, workflow_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/workflows/${encodeURIComponent(workflow_id ?? "null")}/dispatches`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepoAndWorkflow_id.Headers>,
    owner: string,
    repo: string,
    workflow_id: string,
    body: postByOwnerAndRepoAndWorkflow_id.Input,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepoAndWorkflow_id.path(owner, repo, workflow_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("workflow_id")(() => typia.assert(workflow_id));
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