import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposReleasesReactions } from "../../../../structures/IApiReposReleasesReactions";
import { body } from "../../../../structures/body";
import { reaction } from "../../../../structures/reaction";

/**
 * List reactions for a release.
 * List the reactions to a [release](https://docs.github.com/rest/releases/releases#get-a-release).
 *
 * @tag reactions
 * @path repos/:owner/:repo/releases/:release_id/reactions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndRelease_id(
  connection: IConnection<getByOwnerAndRepoAndRelease_id.Headers>,
  owner: string,
  repo: string,
  release_id: string,
  query: getByOwnerAndRepoAndRelease_id.Query,
): Promise<getByOwnerAndRepoAndRelease_id.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndRelease_id.simulate(
        connection,
        owner,
        repo,
        release_id,
        query,
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
          ...getByOwnerAndRepoAndRelease_id.METADATA,
          path: getByOwnerAndRepoAndRelease_id.path(
            owner,
            repo,
            release_id,
            query,
          ),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndRelease_id {
  export type Headers = IApiReposReleasesReactions.GetHeader;
  export type Query = IApiReposReleasesReactions.GetQuery;
  export type Output = reaction[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/releases/:release_id/reactions",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    owner: string,
    repo: string,
    release_id: string,
    query: getByOwnerAndRepoAndRelease_id.Query,
  ) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/releases/${encodeURIComponent(release_id ?? "null")}/reactions`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (g?: Partial<typia.IRandomGenerator>): reaction[] =>
    typia.random<reaction[]>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndRelease_id.Headers>,
    owner: string,
    repo: string,
    release_id: string,
    query: getByOwnerAndRepoAndRelease_id.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndRelease_id.path(owner, repo, release_id, query),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("release_id")(() => typia.assert(release_id));
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
 * Create reaction for a release.
 * Create a reaction to a [release](https://docs.github.com/rest/releases/releases#get-a-release). A response with a `Status: 200 OK` means that you already added the reaction type to this release.
 *
 * @tag reactions
 * @path repos/:owner/:repo/releases/:release_id/reactions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepoAndRelease_id(
  connection: IConnection<postByOwnerAndRepoAndRelease_id.Headers>,
  owner: string,
  repo: string,
  release_id: string,
  body: postByOwnerAndRepoAndRelease_id.Input,
): Promise<postByOwnerAndRepoAndRelease_id.Output> {
  return !!connection.simulate
    ? postByOwnerAndRepoAndRelease_id.simulate(
        connection,
        owner,
        repo,
        release_id,
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
          ...postByOwnerAndRepoAndRelease_id.METADATA,
          path: postByOwnerAndRepoAndRelease_id.path(owner, repo, release_id),
          status: null,
        },
        body,
      );
}
export namespace postByOwnerAndRepoAndRelease_id {
  export type Headers = IApiReposReleasesReactions.PostHeader;
  export type Input = body;
  export type Output = reaction;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/releases/:release_id/reactions",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, release_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/releases/${encodeURIComponent(release_id ?? "null")}/reactions`;
  export const random = (g?: Partial<typia.IRandomGenerator>): reaction =>
    typia.random<reaction>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepoAndRelease_id.Headers>,
    owner: string,
    repo: string,
    release_id: string,
    body: postByOwnerAndRepoAndRelease_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepoAndRelease_id.path(owner, repo, release_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("release_id")(() => typia.assert(release_id));
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
/**
 * Delete a release reaction.
 * > [!NOTE]
 * > You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/releases/:release_id/reactions/:reaction_id`.
 *
 * Delete a reaction to a [release](https://docs.github.com/rest/releases/releases#get-a-release).
 *
 * @tag reactions
 * @path repos/:owner/:repo/releases/:release_id/reactions/:reaction_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOwnerAndRepoAndRelease_idAndReaction_id(
  connection: IConnection<eraseByOwnerAndRepoAndRelease_idAndReaction_id.Headers>,
  owner: string,
  repo: string,
  release_id: string,
  reaction_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOwnerAndRepoAndRelease_idAndReaction_id.simulate(
        connection,
        owner,
        repo,
        release_id,
        reaction_id,
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
          ...eraseByOwnerAndRepoAndRelease_idAndReaction_id.METADATA,
          path: eraseByOwnerAndRepoAndRelease_idAndReaction_id.path(
            owner,
            repo,
            release_id,
            reaction_id,
          ),
          status: null,
        },
      );
}
export namespace eraseByOwnerAndRepoAndRelease_idAndReaction_id {
  export type Headers = IApiReposReleasesReactions.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/repos/:owner/:repo/releases/:release_id/reactions/:reaction_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    owner: string,
    repo: string,
    release_id: string,
    reaction_id: string,
  ) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/releases/${encodeURIComponent(release_id ?? "null")}/reactions/${encodeURIComponent(reaction_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOwnerAndRepoAndRelease_idAndReaction_id.Headers>,
    owner: string,
    repo: string,
    release_id: string,
    reaction_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOwnerAndRepoAndRelease_idAndReaction_id.path(
        owner,
        repo,
        release_id,
        reaction_id,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("release_id")(() => typia.assert(release_id));
      assert.param("reaction_id")(() => typia.assert(reaction_id));
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
