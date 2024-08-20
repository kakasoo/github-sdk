import { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia, { tags } from "typia";

/**
 * Get all API versions.
 * Get all supported GitHub API versions.
 *
 * @tag meta
 * @path versions
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
  export type Output = (string &
    tags.Format<"date"> &
    tags.JsonSchemaPlugin<{
      example: "2021-01-01";
    }>)[];

  export const METADATA = {
    method: "GET",
    path: "/versions",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/versions";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): (string &
    tags.Format<"date"> &
    tags.JsonSchemaPlugin<{
      example: "2021-01-01";
    }>)[] =>
    typia.random<
      (string &
        tags.Format<"date"> &
        tags.JsonSchemaPlugin<{
          example: "2021-01-01";
        }>)[]
    >(g);
  export const simulate = (connection: IConnection): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
