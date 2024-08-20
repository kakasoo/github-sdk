import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiSearchLabels } from "../../../structures/IApiSearchLabels";
import { response } from "../../../structures/response";
/**
 * Search labels.
 * Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api).
 *
 * When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/search/search#text-match-metadata).
 *
 * For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:
 *
 * `q=bug+defect+enhancement&repository_id=64778136`
 *
 * The labels that best match the query appear first in the search results.
 *
 * @tag search
 * @path search/labels
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
  connection: IConnection<get.Headers>,
  query: get.Query,
): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection, query)
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
          path: get.path(query),
          status: null,
        },
      );
}
export namespace get {
  export type Headers = IApiSearchLabels.GetHeader;
  export type Query = IApiSearchLabels.GetQuery;
  export type Output = response;

  export const METADATA = {
    method: "GET",
    path: "/search/labels",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (query: get.Query) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = "/search/labels";
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<get.Headers>,
    query: get.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: get.path(query),
      contentType: "application/json",
    });
    try {
      assert.query(() => typia.assert(query));
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
