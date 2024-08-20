import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposCodespacesMachines } from "../../../../structures/IApiReposCodespacesMachines";
import { response } from "../../../../structures/response";

/**
 * List available machine types for a repository.
 * List the machine types available for a given repository based on its configuration.
 *
 * OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.
 *
 * @tag codespaces
 * @path repos/:owner/:repo/codespaces/machines
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
  export type Headers = IApiReposCodespacesMachines.GetHeader;
  export type Query = IApiReposCodespacesMachines.GetQuery;
  export type Output = response;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/codespaces/machines",
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
    const location: string = `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/codespaces/machines`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
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
