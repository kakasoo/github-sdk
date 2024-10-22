import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiApplicationsTokenScoped } from "../../../../structures/IApiApplicationsTokenScoped";
import { authorization } from "../../../../structures/authorization";
import { body } from "../../../../structures/body";

/**
 * Create a scoped access token.
 * Use a non-scoped user access token to create a repository-scoped and/or permission-scoped user access token. You can specify
 * which repositories the token can access and which permissions are granted to the
 * token.
 *
 * Invalid tokens will return `404 NOT FOUND`.
 *
 * @tag apps
 * @path applications/:client_id/token/scoped
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByClient_id(
  connection: IConnection<postByClient_id.Headers>,
  client_id: string,
  body: postByClient_id.Input,
): Promise<postByClient_id.Output> {
  return !!connection.simulate
    ? postByClient_id.simulate(connection, client_id, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByClient_id.METADATA,
          path: postByClient_id.path(client_id),
          status: null,
        },
        body,
      );
}
export namespace postByClient_id {
  export type Headers = IApiApplicationsTokenScoped.PostHeader;
  export type Input = body;
  export type Output = authorization;

  export const METADATA = {
    method: "POST",
    path: "/applications/:client_id/token/scoped",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (client_id: string) =>
    `/applications/${encodeURIComponent(client_id ?? "null")}/token/scoped`;
  export const random = (g?: Partial<typia.IRandomGenerator>): authorization =>
    typia.random<authorization>(g);
  export const simulate = (
    connection: IConnection<postByClient_id.Headers>,
    client_id: string,
    body: postByClient_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByClient_id.path(client_id),
      contentType: "application/json",
    });
    try {
      assert.param("client_id")(() => typia.assert(client_id));
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
