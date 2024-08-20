import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposForks } from "../../../structures/IApiReposForks";
import { minimal_minus_repository } from "../../../structures/minimal_minus_repository";
import { body } from "../../../structures/body";
/**
 * @tag repos
 * @path repos/:owner/:repo/forks
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
  export type Headers = IApiReposForks.GetHeader;
  export type Query = IApiReposForks.GetQuery;
  export type Output = minimal_minus_repository[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/forks",
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
    const location: string = `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/forks`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): minimal_minus_repository[] => typia.random<minimal_minus_repository[]>(g);
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
/**
 * Create a fork for the authenticated user.
 *
 * > [!NOTE]
 * > Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api).
 *
 * > [!NOTE]
 * > Although this endpoint works with GitHub Apps, the GitHub App must be installed on the destination account with access to all repositories and on the source account with access to the source repository.
 *
 * @tag repos
 * @path repos/:owner/:repo/forks
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepo(
  connection: IConnection<postByOwnerAndRepo.Headers>,
  owner: string,
  repo: string,
  body: postByOwnerAndRepo.Input,
): Promise<void> {
  return !!connection.simulate
    ? postByOwnerAndRepo.simulate(connection, owner, repo, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByOwnerAndRepo.METADATA,
          path: postByOwnerAndRepo.path(owner, repo),
          status: null,
        },
        body,
      );
}
export namespace postByOwnerAndRepo {
  export type Headers = IApiReposForks.PostHeader;
  export type Input = body;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/forks",
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
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/forks`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepo.Headers>,
    owner: string,
    repo: string,
    body: postByOwnerAndRepo.Input,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepo.path(owner, repo),
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