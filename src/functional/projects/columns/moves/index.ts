import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiProjectsColumnsMoves } from "../../../../structures/IApiProjectsColumnsMoves";
import { body } from "../../../../structures/body";
import { response } from "../../../../structures/response";
/**
 * @tag projects
 * @path projects/columns/:column_id/moves
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByColumn_id(
  connection: IConnection<postByColumn_id.Headers>,
  column_id: string,
  body: postByColumn_id.Input,
): Promise<postByColumn_id.Output> {
  return !!connection.simulate
    ? postByColumn_id.simulate(connection, column_id, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByColumn_id.METADATA,
          path: postByColumn_id.path(column_id),
          status: null,
        },
        body,
      );
}
export namespace postByColumn_id {
  export type Headers = IApiProjectsColumnsMoves.PostHeader;
  export type Input = body;
  export type Output = response;

  export const METADATA = {
    method: "POST",
    path: "/projects/columns/:column_id/moves",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (column_id: string) =>
    `/projects/columns/${encodeURIComponent(column_id ?? "null")}/moves`;
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<postByColumn_id.Headers>,
    column_id: string,
    body: postByColumn_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByColumn_id.path(column_id),
      contentType: "application/json",
    });
    try {
      assert.param("column_id")(() => typia.assert(column_id));
      assert.body(() => typia.assert(body));
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