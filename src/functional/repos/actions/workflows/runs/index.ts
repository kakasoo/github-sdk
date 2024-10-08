import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposActionsWorkflowsRuns } from "../../../../../structures/IApiReposActionsWorkflowsRuns";
import { response } from "../../../../../structures/response";

/**
 * List workflow runs for a workflow.
 * List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#parameters).
 *
 * Anyone with read access to the repository can use this endpoint
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/workflows/:workflow_id/runs
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndWorkflow_id(
  connection: IConnection<getByOwnerAndRepoAndWorkflow_id.Headers>,
  owner: string,
  repo: string,
  workflow_id: string,
): Promise<getByOwnerAndRepoAndWorkflow_id.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndWorkflow_id.simulate(
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
          ...getByOwnerAndRepoAndWorkflow_id.METADATA,
          path: getByOwnerAndRepoAndWorkflow_id.path(owner, repo, workflow_id),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndWorkflow_id {
  export type Headers = IApiReposActionsWorkflowsRuns.GetHeader;
  export type Output = response;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/actions/workflows/:workflow_id/runs",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, workflow_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/workflows/${encodeURIComponent(workflow_id ?? "null")}/runs`;
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndWorkflow_id.Headers>,
    owner: string,
    repo: string,
    workflow_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndWorkflow_id.path(owner, repo, workflow_id),
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
