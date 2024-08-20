import { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiGistsPublic } from "../../../structures/IApiGistsPublic";
import { base_minus_gist } from "../../../structures/base_minus_gist";
/**
 * List public gists sorted by most recently updated to least recently updated.
 *
 * Note: With [pagination](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
 *
 * @tag gists
 * @path gists/public
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
  export type Headers = IApiGistsPublic.GetHeader;
  export type Output = base_minus_gist[];

  export const METADATA = {
    method: "GET",
    path: "/gists/public",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/gists/public";
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