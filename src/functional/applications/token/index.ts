import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiApplicationsToken } from "../../../structures/IApiApplicationsToken";
import { body } from "../../../structures/body";
import { authorization } from "../../../structures/authorization";
export * as scoped from "./scoped";
/**
 * Check a token.
 * OAuth applications and GitHub applications with OAuth authorizations can use this API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. Invalid tokens will return `404 NOT FOUND`.
 *
 * @tag apps
 * @path applications/:client_id/token
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
  export type Headers = IApiApplicationsToken.PostHeader;
  export type Input = body;
  export type Output = authorization;

  export const METADATA = {
    method: "POST",
    path: "/applications/:client_id/token",
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
    `/applications/${encodeURIComponent(client_id ?? "null")}/token`;
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
/**
 * Reset a token.
 * OAuth applications and GitHub applications with OAuth authorizations can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. Invalid tokens will return `404 NOT FOUND`.
 *
 * @tag apps
 * @path applications/:client_id/token
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function patchByClient_id(
  connection: IConnection<patchByClient_id.Headers>,
  client_id: string,
  body: patchByClient_id.Input,
): Promise<patchByClient_id.Output> {
  return !!connection.simulate
    ? patchByClient_id.simulate(connection, client_id, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...patchByClient_id.METADATA,
          path: patchByClient_id.path(client_id),
          status: null,
        },
        body,
      );
}
export namespace patchByClient_id {
  export type Headers = IApiApplicationsToken.PatchHeader;
  export type Input = body;
  export type Output = authorization;

  export const METADATA = {
    method: "PATCH",
    path: "/applications/:client_id/token",
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
    `/applications/${encodeURIComponent(client_id ?? "null")}/token`;
  export const random = (g?: Partial<typia.IRandomGenerator>): authorization =>
    typia.random<authorization>(g);
  export const simulate = (
    connection: IConnection<patchByClient_id.Headers>,
    client_id: string,
    body: patchByClient_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: patchByClient_id.path(client_id),
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
/**
 * Delete an app token.
 * OAuth  or GitHub application owners can revoke a single token for an OAuth application or a GitHub application with an OAuth authorization.
 *
 * @tag apps
 * @path applications/:client_id/token
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByClient_id(
  connection: IConnection<eraseByClient_id.Headers>,
  client_id: string,
  body: eraseByClient_id.Input,
): Promise<void> {
  return !!connection.simulate
    ? eraseByClient_id.simulate(connection, client_id, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByClient_id.METADATA,
          path: eraseByClient_id.path(client_id),
          status: null,
        },
        body,
      );
}
export namespace eraseByClient_id {
  export type Headers = IApiApplicationsToken.DeleteHeader;
  export type Input = body;

  export const METADATA = {
    method: "DELETE",
    path: "/applications/:client_id/token",
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
    `/applications/${encodeURIComponent(client_id ?? "null")}/token`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByClient_id.Headers>,
    client_id: string,
    body: eraseByClient_id.Input,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByClient_id.path(client_id),
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