import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposCommentsReactions } from "../../../../structures/IApiReposCommentsReactions";
import { reaction } from "../../../../structures/reaction";
import { body } from "../../../../structures/body";
/**
 * List reactions for a commit comment.
 * List the reactions to a [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment).
 *
 * @tag reactions
 * @path repos/:owner/:repo/comments/:comment_id/reactions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndComment_id(
  connection: IConnection<getByOwnerAndRepoAndComment_id.Headers>,
  owner: string,
  repo: string,
  comment_id: string,
  query: getByOwnerAndRepoAndComment_id.Query,
): Promise<getByOwnerAndRepoAndComment_id.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndComment_id.simulate(
        connection,
        owner,
        repo,
        comment_id,
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
          ...getByOwnerAndRepoAndComment_id.METADATA,
          path: getByOwnerAndRepoAndComment_id.path(
            owner,
            repo,
            comment_id,
            query,
          ),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndComment_id {
  export type Headers = IApiReposCommentsReactions.GetHeader;
  export type Query = IApiReposCommentsReactions.GetQuery;
  export type Output = reaction[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/comments/:comment_id/reactions",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    owner: string,
    repo: string,
    comment_id: string,
    query: getByOwnerAndRepoAndComment_id.Query,
  ) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/comments/${encodeURIComponent(comment_id ?? "null")}/reactions`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (g?: Partial<typia.IRandomGenerator>): reaction[] =>
    typia.random<reaction[]>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndComment_id.Headers>,
    owner: string,
    repo: string,
    comment_id: string,
    query: getByOwnerAndRepoAndComment_id.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndComment_id.path(owner, repo, comment_id, query),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("comment_id")(() => typia.assert(comment_id));
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
 * Create reaction for a commit comment.
 * Create a reaction to a [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.
 *
 * @tag reactions
 * @path repos/:owner/:repo/comments/:comment_id/reactions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepoAndComment_id(
  connection: IConnection<postByOwnerAndRepoAndComment_id.Headers>,
  owner: string,
  repo: string,
  comment_id: string,
  body: postByOwnerAndRepoAndComment_id.Input,
): Promise<postByOwnerAndRepoAndComment_id.Output> {
  return !!connection.simulate
    ? postByOwnerAndRepoAndComment_id.simulate(
        connection,
        owner,
        repo,
        comment_id,
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
          ...postByOwnerAndRepoAndComment_id.METADATA,
          path: postByOwnerAndRepoAndComment_id.path(owner, repo, comment_id),
          status: null,
        },
        body,
      );
}
export namespace postByOwnerAndRepoAndComment_id {
  export type Headers = IApiReposCommentsReactions.PostHeader;
  export type Input = body;
  export type Output = reaction;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/comments/:comment_id/reactions",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, comment_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/comments/${encodeURIComponent(comment_id ?? "null")}/reactions`;
  export const random = (g?: Partial<typia.IRandomGenerator>): reaction =>
    typia.random<reaction>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepoAndComment_id.Headers>,
    owner: string,
    repo: string,
    comment_id: string,
    body: postByOwnerAndRepoAndComment_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepoAndComment_id.path(owner, repo, comment_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("comment_id")(() => typia.assert(comment_id));
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
 * Delete a commit comment reaction.
 * > [!NOTE]
 * > You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.
 *
 * Delete a reaction to a [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment).
 *
 * @tag reactions
 * @path repos/:owner/:repo/comments/:comment_id/reactions/:reaction_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOwnerAndRepoAndComment_idAndReaction_id(
  connection: IConnection<eraseByOwnerAndRepoAndComment_idAndReaction_id.Headers>,
  owner: string,
  repo: string,
  comment_id: string,
  reaction_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOwnerAndRepoAndComment_idAndReaction_id.simulate(
        connection,
        owner,
        repo,
        comment_id,
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
          ...eraseByOwnerAndRepoAndComment_idAndReaction_id.METADATA,
          path: eraseByOwnerAndRepoAndComment_idAndReaction_id.path(
            owner,
            repo,
            comment_id,
            reaction_id,
          ),
          status: null,
        },
      );
}
export namespace eraseByOwnerAndRepoAndComment_idAndReaction_id {
  export type Headers = IApiReposCommentsReactions.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/repos/:owner/:repo/comments/:comment_id/reactions/:reaction_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    owner: string,
    repo: string,
    comment_id: string,
    reaction_id: string,
  ) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/comments/${encodeURIComponent(comment_id ?? "null")}/reactions/${encodeURIComponent(reaction_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOwnerAndRepoAndComment_idAndReaction_id.Headers>,
    owner: string,
    repo: string,
    comment_id: string,
    reaction_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOwnerAndRepoAndComment_idAndReaction_id.path(
        owner,
        repo,
        comment_id,
        reaction_id,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("comment_id")(() => typia.assert(comment_id));
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