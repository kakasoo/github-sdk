import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiNotificationsThreads } from "../../../structures/IApiNotificationsThreads";
import { thread } from "../../../structures/thread";

export * as subscription from "./subscription";
/**
 * Get a thread.
 * Gets information about a notification thread.
 *
 * @tag activity
 * @path notifications/threads/:thread_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByThread_id(
  connection: IConnection<getByThread_id.Headers>,
  thread_id: string,
): Promise<getByThread_id.Output> {
  return !!connection.simulate
    ? getByThread_id.simulate(connection, thread_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByThread_id.METADATA,
          path: getByThread_id.path(thread_id),
          status: null,
        },
      );
}
export namespace getByThread_id {
  export type Headers = IApiNotificationsThreads.GetHeader;
  export type Output = thread;

  export const METADATA = {
    method: "GET",
    path: "/notifications/threads/:thread_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (thread_id: string) =>
    `/notifications/threads/${encodeURIComponent(thread_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): thread =>
    typia.random<thread>(g);
  export const simulate = (
    connection: IConnection<getByThread_id.Headers>,
    thread_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByThread_id.path(thread_id),
      contentType: "application/json",
    });
    try {
      assert.param("thread_id")(() => typia.assert(thread_id));
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
 * Mark a thread as read.
 * Marks a thread as "read." Marking a thread as "read" is equivalent to clicking a notification in your notification inbox on GitHub: https://github.com/notifications.
 *
 * @tag activity
 * @path notifications/threads/:thread_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function patchByThread_id(
  connection: IConnection<patchByThread_id.Headers>,
  thread_id: string,
): Promise<void> {
  return !!connection.simulate
    ? patchByThread_id.simulate(connection, thread_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...patchByThread_id.METADATA,
          path: patchByThread_id.path(thread_id),
          status: null,
        },
      );
}
export namespace patchByThread_id {
  export type Headers = IApiNotificationsThreads.PatchHeader;

  export const METADATA = {
    method: "PATCH",
    path: "/notifications/threads/:thread_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (thread_id: string) =>
    `/notifications/threads/${encodeURIComponent(thread_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<patchByThread_id.Headers>,
    thread_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: patchByThread_id.path(thread_id),
      contentType: "application/json",
    });
    try {
      assert.param("thread_id")(() => typia.assert(thread_id));
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
 * Mark a thread as done.
 * Marks a thread as "done." Marking a thread as "done" is equivalent to marking a notification in your notification inbox on GitHub as done: https://github.com/notifications.
 *
 * @tag activity
 * @path notifications/threads/:thread_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByThread_id(
  connection: IConnection<eraseByThread_id.Headers>,
  thread_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByThread_id.simulate(connection, thread_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByThread_id.METADATA,
          path: eraseByThread_id.path(thread_id),
          status: null,
        },
      );
}
export namespace eraseByThread_id {
  export type Headers = IApiNotificationsThreads.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/notifications/threads/:thread_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (thread_id: string) =>
    `/notifications/threads/${encodeURIComponent(thread_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByThread_id.Headers>,
    thread_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByThread_id.path(thread_id),
      contentType: "application/json",
    });
    try {
      assert.param("thread_id")(() => typia.assert(thread_id));
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
