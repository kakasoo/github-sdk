import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposSecretScanningPushProtectionBypasses } from "../../../../structures/IApiReposSecretScanningPushProtectionBypasses";
import { body } from "../../../../structures/body";
import { secret_minus_scanning_minus_push_minus_protection_minus_bypass } from "../../../../structures/secret_minus_scanning_minus_push_minus_protection_minus_bypass";
/**
 * Create a push protection bypass.
 * Creates a bypass for a previously push protected secret.
 *
 * The authenticated user must be the original author of the committed secret.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag secret-scanning
 * @path repos/:owner/:repo/secret-scanning/push-protection-bypasses
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
  export type Headers =
    IApiReposSecretScanningPushProtectionBypasses.PostHeader;
  export type Input = body;
  export type Output =
    secret_minus_scanning_minus_push_minus_protection_minus_bypass;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/secret-scanning/push-protection-bypasses",
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
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/secret-scanning/push-protection-bypasses`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): secret_minus_scanning_minus_push_minus_protection_minus_bypass =>
    typia.random<secret_minus_scanning_minus_push_minus_protection_minus_bypass>(
      g,
    );
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