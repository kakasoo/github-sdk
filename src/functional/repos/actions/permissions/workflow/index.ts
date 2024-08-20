import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposActionsPermissionsWorkflow } from "../../../../../structures/IApiReposActionsPermissionsWorkflow";
import { actions_minus_get_minus_default_minus_workflow_minus_permissions } from "../../../../../structures/actions_minus_get_minus_default_minus_workflow_minus_permissions";
import { actions_minus_set_minus_default_minus_workflow_minus_permissions } from "../../../../../structures/actions_minus_set_minus_default_minus_workflow_minus_permissions";

/**
 * Get default workflow permissions for a repository.
 * Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository,
 * as well as if GitHub Actions can submit approving pull request reviews.
 * For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."
 *
 * OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/permissions/workflow
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
  export type Headers = IApiReposActionsPermissionsWorkflow.GetHeader;
  export type Output =
    actions_minus_get_minus_default_minus_workflow_minus_permissions;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/actions/permissions/workflow",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/permissions/workflow`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): actions_minus_get_minus_default_minus_workflow_minus_permissions =>
    typia.random<actions_minus_get_minus_default_minus_workflow_minus_permissions>(
      g,
    );
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
 * Set default workflow permissions for a repository.
 * Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository, and sets if GitHub Actions
 * can submit approving pull request reviews.
 * For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/permissions/workflow
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOwnerAndRepo(
  connection: IConnection<putByOwnerAndRepo.Headers>,
  owner: string,
  repo: string,
  body: putByOwnerAndRepo.Input,
): Promise<void> {
  return !!connection.simulate
    ? putByOwnerAndRepo.simulate(connection, owner, repo, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...putByOwnerAndRepo.METADATA,
          path: putByOwnerAndRepo.path(owner, repo),
          status: null,
        },
        body,
      );
}
export namespace putByOwnerAndRepo {
  export type Headers = IApiReposActionsPermissionsWorkflow.PutHeader;
  export type Input =
    actions_minus_set_minus_default_minus_workflow_minus_permissions;

  export const METADATA = {
    method: "PUT",
    path: "/repos/:owner/:repo/actions/permissions/workflow",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/permissions/workflow`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<putByOwnerAndRepo.Headers>,
    owner: string,
    repo: string,
    body: putByOwnerAndRepo.Input,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByOwnerAndRepo.path(owner, repo),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
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
