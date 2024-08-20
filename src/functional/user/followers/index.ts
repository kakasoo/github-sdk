import { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiUserFollowers } from "../../../structures/IApiUserFollowers";
import { simple_minus_user } from "../../../structures/simple_minus_user";
/**
 * List followers of the authenticated user.
 * Lists the people following the authenticated user.
 *
 * @tag users
 * @path user/followers
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
  connection: IConnection<get.Headers>,
): Promise<get.Output> {
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
  export type Headers = IApiUserFollowers.GetHeader;
  export type Output = simple_minus_user[];

  export const METADATA = {
    method: "GET",
    path: "/user/followers",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/user/followers";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): simple_minus_user[] => typia.random<simple_minus_user[]>(g);
  export const simulate = (connection: IConnection<get.Headers>): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
