import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiProjectsColumnsCardsMoves } from "../../../../../structures/IApiProjectsColumnsCardsMoves";
import { body } from "../../../../../structures/body";
import { response } from "../../../../../structures/response";

/**
 * @tag projects
 * @path projects/columns/cards/:card_id/moves
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByCard_id(
  connection: IConnection<postByCard_id.Headers>,
  card_id: string,
  body: postByCard_id.Input,
): Promise<postByCard_id.Output> {
  return !!connection.simulate
    ? postByCard_id.simulate(connection, card_id, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByCard_id.METADATA,
          path: postByCard_id.path(card_id),
          status: null,
        },
        body,
      );
}
export namespace postByCard_id {
  export type Headers = IApiProjectsColumnsCardsMoves.PostHeader;
  export type Input = body;
  export type Output = response;

  export const METADATA = {
    method: "POST",
    path: "/projects/columns/cards/:card_id/moves",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (card_id: string) =>
    `/projects/columns/cards/${encodeURIComponent(card_id ?? "null")}/moves`;
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<postByCard_id.Headers>,
    card_id: string,
    body: postByCard_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByCard_id.path(card_id),
      contentType: "application/json",
    });
    try {
      assert.param("card_id")(() => typia.assert(card_id));
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
