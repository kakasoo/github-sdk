import { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiGistsStarred } from "../../../structures/IApiGistsStarred";
import { base_minus_gist } from "../../../structures/base_minus_gist";

/**
 * List starred gists.
 * List the authenticated user's starred gists:
 *
 * @tag gists
 * @path gists/starred
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
  export type Headers = IApiGistsStarred.GetHeader;
  export type Output = base_minus_gist[];

  export const METADATA = {
    method: "GET",
    path: "/gists/starred",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/gists/starred";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): base_minus_gist[] => typia.random<base_minus_gist[]>(g);
  export const simulate = (connection: IConnection<get.Headers>): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
