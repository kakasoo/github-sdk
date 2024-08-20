import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsDependabotSecretsPublicKey } from "../../../../../structures/IApiOrgsDependabotSecretsPublicKey";
import { dependabot_minus_public_minus_key } from "../../../../../structures/dependabot_minus_public_minus_key";

/**
 * Get an organization public key.
 * Gets your public key, which you need to encrypt secrets. You need to
 * encrypt a secret before you can create or update secrets.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
 *
 * @tag dependabot
 * @path orgs/:org/dependabot/secrets/public-key
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrg(
  connection: IConnection<getByOrg.Headers>,
  org: string,
): Promise<getByOrg.Output> {
  return !!connection.simulate
    ? getByOrg.simulate(connection, org)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOrg.METADATA,
          path: getByOrg.path(org),
          status: null,
        },
      );
}
export namespace getByOrg {
  export type Headers = IApiOrgsDependabotSecretsPublicKey.GetHeader;
  export type Output = dependabot_minus_public_minus_key;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/dependabot/secrets/public-key",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/dependabot/secrets/public-key`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): dependabot_minus_public_minus_key =>
    typia.random<dependabot_minus_public_minus_key>(g);
  export const simulate = (
    connection: IConnection<getByOrg.Headers>,
    org: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrg.path(org),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
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
