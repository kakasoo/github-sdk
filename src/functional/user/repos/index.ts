import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiUserRepos } from "../../../structures/IApiUserRepos";
import { repository } from "../../../structures/repository";
import { body } from "../../../structures/body";
import { full_minus_repository } from "../../../structures/full_minus_repository";
/**
 * List repositories for the authenticated user.
 * Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
 *
 * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
 *
 * @tag repos
 * @path user/repos
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
  connection: IConnection<get.Headers>,
  query: get.Query,
): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection, query)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...get.METADATA,
          path: get.path(query),
          status: null,
        },
      );
}
export namespace get {
  export type Headers = IApiUserRepos.GetHeader;
  export type Query = IApiUserRepos.GetQuery;
  export type Output = repository[];

  export const METADATA = {
    method: "GET",
    path: "/user/repos",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (query: get.Query) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = "/user/repos";
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (g?: Partial<typia.IRandomGenerator>): repository[] =>
    typia.random<repository[]>(g);
  export const simulate = (
    connection: IConnection<get.Headers>,
    query: get.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: get.path(query),
      contentType: "application/json",
    });
    try {
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
 * Create a repository for the authenticated user.
 * Creates a new repository for the authenticated user.
 *
 * OAuth app tokens and personal access tokens (classic) need the `public_repo` or `repo` scope to create a public repository, and `repo` scope to create a private repository.
 *
 * @tag repos
 * @path user/repos
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function post(
  connection: IConnection,
  body: post.Input,
): Promise<post.Output> {
  return !!connection.simulate
    ? post.simulate(connection, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...post.METADATA,
          path: post.path(),
          status: null,
        },
        body,
      );
}
export namespace post {
  export type Input = body;
  export type Output = full_minus_repository;

  export const METADATA = {
    method: "POST",
    path: "/user/repos",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/user/repos";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): full_minus_repository => typia.random<full_minus_repository>(g);
  export const simulate = (
    connection: IConnection,
    body: post.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: post.path(),
      contentType: "application/json",
    });
    try {
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
