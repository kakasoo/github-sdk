import { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiRepositories } from "../../structures/IApiRepositories";
import { minimal_minus_repository } from "../../structures/minimal_minus_repository";
/**
 * List public repositories.
 * Lists all public repositories in the order that they were created.
 *
 * Note:
 * - For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise.
 * - Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers) to get the URL for the next page of repositories.
 *
 * @tag repos
 * @path repositories
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
  export type Headers = IApiRepositories.GetHeader;
  export type Output = minimal_minus_repository[];

  export const METADATA = {
    method: "GET",
    path: "/repositories",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/repositories";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): minimal_minus_repository[] => typia.random<minimal_minus_repository[]>(g);
  export const simulate = (connection: IConnection<get.Headers>): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}