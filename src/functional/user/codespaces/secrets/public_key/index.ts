import { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { codespaces_minus_user_minus_public_minus_key } from "../../../../../structures/codespaces_minus_user_minus_public_minus_key";
/**
 * Get public key for the authenticated user.
 * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets.
 *
 * The authenticated user must have Codespaces access to use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.
 *
 * @tag codespaces
 * @path user/codespaces/secrets/public-key
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(connection: IConnection): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection)
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
          path: get.path(),
          status: null,
        },
      );
}
export namespace get {
  export type Output = codespaces_minus_user_minus_public_minus_key;

  export const METADATA = {
    method: "GET",
    path: "/user/codespaces/secrets/public-key",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/user/codespaces/secrets/public-key";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): codespaces_minus_user_minus_public_minus_key =>
    typia.random<codespaces_minus_user_minus_public_minus_key>(g);
  export const simulate = (connection: IConnection): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
