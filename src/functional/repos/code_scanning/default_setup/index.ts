import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposCodeScanningDefaultSetup } from "../../../../structures/IApiReposCodeScanningDefaultSetup";
import { code_minus_scanning_minus_default_minus_setup } from "../../../../structures/code_minus_scanning_minus_default_minus_setup";
import { code_minus_scanning_minus_default_minus_setup_minus_update } from "../../../../structures/code_minus_scanning_minus_default_minus_setup_minus_update";
import { empty_minus_object } from "../../../../structures/empty_minus_object";
/**
 * Get a code scanning default setup configuration.
 * Gets a code scanning default setup configuration.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.
 *
 * @tag code-scanning
 * @path repos/:owner/:repo/code-scanning/default-setup
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
  export type Headers = IApiReposCodeScanningDefaultSetup.GetHeader;
  export type Output = code_minus_scanning_minus_default_minus_setup;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/code-scanning/default-setup",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/code-scanning/default-setup`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): code_minus_scanning_minus_default_minus_setup =>
    typia.random<code_minus_scanning_minus_default_minus_setup>(g);
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
 * Update a code scanning default setup configuration.
 * Updates a code scanning default setup configuration.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.
 *
 * @tag code-scanning
 * @path repos/:owner/:repo/code-scanning/default-setup
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function patchByOwnerAndRepo(
  connection: IConnection<patchByOwnerAndRepo.Headers>,
  owner: string,
  repo: string,
  body: patchByOwnerAndRepo.Input,
): Promise<patchByOwnerAndRepo.Output> {
  return !!connection.simulate
    ? patchByOwnerAndRepo.simulate(connection, owner, repo, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...patchByOwnerAndRepo.METADATA,
          path: patchByOwnerAndRepo.path(owner, repo),
          status: null,
        },
        body,
      );
}
export namespace patchByOwnerAndRepo {
  export type Headers = IApiReposCodeScanningDefaultSetup.PatchHeader;
  export type Input =
    code_minus_scanning_minus_default_minus_setup_minus_update;
  export type Output = empty_minus_object;

  export const METADATA = {
    method: "PATCH",
    path: "/repos/:owner/:repo/code-scanning/default-setup",
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
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/code-scanning/default-setup`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): empty_minus_object => typia.random<empty_minus_object>(g);
  export const simulate = (
    connection: IConnection<patchByOwnerAndRepo.Headers>,
    owner: string,
    repo: string,
    body: patchByOwnerAndRepo.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: patchByOwnerAndRepo.path(owner, repo),
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