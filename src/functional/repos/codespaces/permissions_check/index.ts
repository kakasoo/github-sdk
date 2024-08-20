import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposCodespacesPermissionsCheck } from "../../../../structures/IApiReposCodespacesPermissionsCheck";
import { codespaces_minus_permissions_minus_check_minus_for_minus_devcontainer } from "../../../../structures/codespaces_minus_permissions_minus_check_minus_for_minus_devcontainer";
/**
 * Check if permissions defined by a devcontainer have been accepted by the authenticated user.
 * Checks whether the permissions defined by a given devcontainer configuration have been accepted by the authenticated user.
 *
 * OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.
 *
 * @tag codespaces
 * @path repos/:owner/:repo/codespaces/permissions_check
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepo(
  connection: IConnection<getByOwnerAndRepo.Headers>,
  owner: string,
  repo: string,
  query: getByOwnerAndRepo.Query,
): Promise<getByOwnerAndRepo.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepo.simulate(connection, owner, repo, query)
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
          path: getByOwnerAndRepo.path(owner, repo, query),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepo {
  export type Headers = IApiReposCodespacesPermissionsCheck.GetHeader;
  export type Query = IApiReposCodespacesPermissionsCheck.GetQuery;
  export type Output =
    codespaces_minus_permissions_minus_check_minus_for_minus_devcontainer;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/codespaces/permissions_check",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    owner: string,
    repo: string,
    query: getByOwnerAndRepo.Query,
  ) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/codespaces/permissions_check`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): codespaces_minus_permissions_minus_check_minus_for_minus_devcontainer =>
    typia.random<codespaces_minus_permissions_minus_check_minus_for_minus_devcontainer>(
      g,
    );
  export const simulate = (
    connection: IConnection<getByOwnerAndRepo.Headers>,
    owner: string,
    repo: string,
    query: getByOwnerAndRepo.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepo.path(owner, repo, query),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
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