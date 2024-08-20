import { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { api_minus_overview } from "../../structures/api_minus_overview";
/**
 * Get GitHub meta information.
 * Returns meta information about GitHub, including a list of GitHub's IP addresses. For more information, see "[About GitHub's IP addresses](https://docs.github.com/articles/about-github-s-ip-addresses/)."
 *
 * The API's response also includes a list of GitHub's domain names.
 *
 * The values shown in the documentation's response are example values. You must always query the API directly to get the latest values.
 *
 * > [!NOTE]
 * > This endpoint returns both IPv4 and IPv6 addresses. However, not all features support IPv6. You should refer to the specific documentation for each feature to determine if IPv6 is supported.
 *
 * @tag meta
 * @path meta
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
  export type Output = api_minus_overview;

  export const METADATA = {
    method: "GET",
    path: "/meta",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/meta";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): api_minus_overview => typia.random<api_minus_overview>(g);
  export const simulate = (connection: IConnection): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}