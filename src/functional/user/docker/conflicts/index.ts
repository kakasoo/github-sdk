import { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { package } from "../../../../structures/package";
/**
 * Get list of conflicting packages during Docker migration for authenticated-user.
 * Lists all packages that are owned by the authenticated user within the user's namespace, and that encountered a conflict during a Docker migration.
 *
 * OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint.
 *
 * @tag packages
 * @path user/docker/conflicts
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
  export type Output = package[];

  export const METADATA = {
    method: "GET",
    path: "/user/docker/conflicts",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/user/docker/conflicts";
  export const random = (g?: Partial<typia.IRandomGenerator>): package[] =>
    typia.random<package[]>(g);
  export const simulate = (connection: IConnection): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
