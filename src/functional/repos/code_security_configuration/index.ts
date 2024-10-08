import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposCodeSecurityConfiguration } from "../../../structures/IApiReposCodeSecurityConfiguration";
import { code_minus_security_minus_configuration_minus_for_minus_repository } from "../../../structures/code_minus_security_minus_configuration_minus_for_minus_repository";

/**
 * Get the code security configuration associated with a repository.
 * Get the code security configuration that manages a repository's code security settings.
 *
 * The authenticated user must be an administrator or security manager for the organization to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag code-security
 * @path repos/:owner/:repo/code-security-configuration
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
  export type Headers = IApiReposCodeSecurityConfiguration.GetHeader;
  export type Output =
    code_minus_security_minus_configuration_minus_for_minus_repository;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/code-security-configuration",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/code-security-configuration`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): code_minus_security_minus_configuration_minus_for_minus_repository =>
    typia.random<code_minus_security_minus_configuration_minus_for_minus_repository>(
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
