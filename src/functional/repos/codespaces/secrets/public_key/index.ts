import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposCodespacesSecretsPublicKey } from "../../../../../structures/IApiReposCodespacesSecretsPublicKey";
import { codespaces_minus_public_minus_key } from "../../../../../structures/codespaces_minus_public_minus_key";

/**
 * Get a repository public key.
 * Gets your public key, which you need to encrypt secrets. You need to
 * encrypt a secret before you can create or update secrets.
 *
 * Anyone with read access to the repository can use this endpoint.
 *
 * If the repository is private, OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag codespaces
 * @path repos/:owner/:repo/codespaces/secrets/public-key
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
  export type Headers = IApiReposCodespacesSecretsPublicKey.GetHeader;
  export type Output = codespaces_minus_public_minus_key;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/codespaces/secrets/public-key",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/codespaces/secrets/public-key`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): codespaces_minus_public_minus_key =>
    typia.random<codespaces_minus_public_minus_key>(g);
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
