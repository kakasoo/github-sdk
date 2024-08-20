import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiNotifications } from "../../structures/IApiNotifications";
import { body } from "../../structures/body";
import { thread } from "../../structures/thread";

export * as threads from "./threads";
/**
 * List notifications for the authenticated user.
 * List all notifications for the current user, sorted by most recently updated.
 *
 * @tag activity
 * @path notifications
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
  export type Headers = IApiNotifications.GetHeader;
  export type Query = IApiNotifications.GetQuery;
  export type Output = thread[];

  export const METADATA = {
    method: "GET",
    path: "/notifications",
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
    const location: string = "/notifications";
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (g?: Partial<typia.IRandomGenerator>): thread[] =>
    typia.random<thread[]>(g);
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
/**
 * Mark notifications as read.
 * Marks all notifications as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/rest/activity/notifications#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
 *
 * @tag activity
 * @path notifications
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function put(
  connection: IConnection,
  body: put.Input,
): Promise<void> {
  return !!connection.simulate
    ? put.simulate(connection, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...put.METADATA,
          path: put.path(),
          status: null,
        },
        body,
      );
}
export namespace put {
  export type Input = body;

  export const METADATA = {
    method: "PUT",
    path: "/notifications",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = () => "/notifications";
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (connection: IConnection, body: put.Input): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: put.path(),
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
