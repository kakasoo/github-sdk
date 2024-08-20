import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiUserSocialAccounts } from "../../../structures/IApiUserSocialAccounts";
import { social_minus_account } from "../../../structures/social_minus_account";
import { body } from "../../../structures/body";
/**
 * List social accounts for the authenticated user.
 * Lists all of your social accounts.
 *
 * @tag users
 * @path user/social_accounts
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
  export type Headers = IApiUserSocialAccounts.GetHeader;
  export type Output = social_minus_account[];

  export const METADATA = {
    method: "GET",
    path: "/user/social_accounts",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/user/social_accounts";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): social_minus_account[] => typia.random<social_minus_account[]>(g);
  export const simulate = (connection: IConnection<get.Headers>): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
/**
 * Add social accounts for the authenticated user.
 * Add one or more social accounts to the authenticated user's profile.
 *
 * OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.
 *
 * @tag users
 * @path user/social_accounts
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function post(
  connection: IConnection,
  body: post.Input,
): Promise<post.Output> {
  return !!connection.simulate
    ? post.simulate(connection, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...post.METADATA,
          path: post.path(),
          status: null,
        },
        body,
      );
}
export namespace post {
  export type Input = body;
  export type Output = social_minus_account[];

  export const METADATA = {
    method: "POST",
    path: "/user/social_accounts",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/user/social_accounts";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): social_minus_account[] => typia.random<social_minus_account[]>(g);
  export const simulate = (
    connection: IConnection,
    body: post.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: post.path(),
      contentType: "application/json",
    });
    try {
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
 * Delete social accounts for the authenticated user.
 * Deletes one or more social accounts from the authenticated user's profile.
 *
 * OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.
 *
 * @tag users
 * @path user/social_accounts
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function erase(
  connection: IConnection,
  body: erase.Input,
): Promise<void> {
  return !!connection.simulate
    ? erase.simulate(connection, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...erase.METADATA,
          path: erase.path(),
          status: null,
        },
        body,
      );
}
export namespace erase {
  export type Input = body;

  export const METADATA = {
    method: "DELETE",
    path: "/user/social_accounts",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/user/social_accounts";
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection,
    body: erase.Input,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: erase.path(),
      contentType: "application/json",
    });
    try {
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