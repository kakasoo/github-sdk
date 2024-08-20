import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposKeys } from "../../../structures/IApiReposKeys";
import { body } from "../../../structures/body";
import { deploy_minus_key } from "../../../structures/deploy_minus_key";

/**
 * @tag repos
 * @path repos/:owner/:repo/keys
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
  export type Headers = IApiReposKeys.GetHeader;
  export type Output = deploy_minus_key[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/keys",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/keys`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): deploy_minus_key[] => typia.random<deploy_minus_key[]>(g);
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
 * Create a deploy key.
 * You can create a read-only deploy key.
 *
 * @tag repos
 * @path repos/:owner/:repo/keys
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepo(
  connection: IConnection<postByOwnerAndRepo.Headers>,
  owner: string,
  repo: string,
  body: postByOwnerAndRepo.Input,
): Promise<postByOwnerAndRepo.Output> {
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
  export type Headers = IApiReposKeys.PostHeader;
  export type Input = body;
  export type Output = deploy_minus_key;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/keys",
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
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/keys`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): deploy_minus_key => typia.random<deploy_minus_key>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepo.Headers>,
    owner: string,
    repo: string,
    body: postByOwnerAndRepo.Input,
  ): Output => {
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
/**
 * @tag repos
 * @path repos/:owner/:repo/keys/:key_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndKey_id(
  connection: IConnection<getByOwnerAndRepoAndKey_id.Headers>,
  owner: string,
  repo: string,
  key_id: string,
): Promise<getByOwnerAndRepoAndKey_id.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndKey_id.simulate(connection, owner, repo, key_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOwnerAndRepoAndKey_id.METADATA,
          path: getByOwnerAndRepoAndKey_id.path(owner, repo, key_id),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndKey_id {
  export type Headers = IApiReposKeys.GetHeader;
  export type Output = deploy_minus_key;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/keys/:key_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, key_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/keys/${encodeURIComponent(key_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): deploy_minus_key => typia.random<deploy_minus_key>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndKey_id.Headers>,
    owner: string,
    repo: string,
    key_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndKey_id.path(owner, repo, key_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("key_id")(() => typia.assert(key_id));
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
 * Delete a deploy key.
 * Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.
 *
 * @tag repos
 * @path repos/:owner/:repo/keys/:key_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOwnerAndRepoAndKey_id(
  connection: IConnection<eraseByOwnerAndRepoAndKey_id.Headers>,
  owner: string,
  repo: string,
  key_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOwnerAndRepoAndKey_id.simulate(connection, owner, repo, key_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByOwnerAndRepoAndKey_id.METADATA,
          path: eraseByOwnerAndRepoAndKey_id.path(owner, repo, key_id),
          status: null,
        },
      );
}
export namespace eraseByOwnerAndRepoAndKey_id {
  export type Headers = IApiReposKeys.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/repos/:owner/:repo/keys/:key_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, key_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/keys/${encodeURIComponent(key_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOwnerAndRepoAndKey_id.Headers>,
    owner: string,
    repo: string,
    key_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOwnerAndRepoAndKey_id.path(owner, repo, key_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("key_id")(() => typia.assert(key_id));
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
