import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiSearchCode } from "../../../structures/IApiSearchCode";
import { response } from "../../../structures/response";

/**
 * Search code.
 * Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api).
 *
 * When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/search/search#text-match-metadata).
 *
 * For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:
 *
 * `q=addClass+in:file+language:js+repo:jquery/jquery`
 *
 * This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.
 *
 * Considerations for code search:
 *
 * Due to the complexity of searching code, there are a few restrictions on how searches are performed:
 *
 * *   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
 * *   Only files smaller than 384 KB are searchable.
 * *   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing
 * language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.
 *
 * This endpoint requires you to authenticate and limits you to 10 requests per minute.
 *
 * @tag search
 * @path search/code
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
  export type Headers = IApiSearchCode.GetHeader;
  export type Query = IApiSearchCode.GetQuery;
  export type Output = response;

  export const METADATA = {
    method: "GET",
    path: "/search/code",
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
    const location: string = "/search/code";
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
