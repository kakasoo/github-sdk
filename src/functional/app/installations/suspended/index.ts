import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiAppInstallationsSuspended } from "../../../../structures/IApiAppInstallationsSuspended";
/**
 * Suspend an app installation.
 * Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub API or webhook events is blocked for that account.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 *
 * @tag apps
 * @path app/installations/:installation_id/suspended
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByInstallation_id(
  connection: IConnection<putByInstallation_id.Headers>,
  installation_id: string,
): Promise<void> {
  return !!connection.simulate
    ? putByInstallation_id.simulate(connection, installation_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...putByInstallation_id.METADATA,
          path: putByInstallation_id.path(installation_id),
          status: null,
        },
      );
}
export namespace putByInstallation_id {
  export type Headers = IApiAppInstallationsSuspended.PutHeader;

  export const METADATA = {
    method: "PUT",
    path: "/app/installations/:installation_id/suspended",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (installation_id: string) =>
    `/app/installations/${encodeURIComponent(installation_id ?? "null")}/suspended`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<putByInstallation_id.Headers>,
    installation_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByInstallation_id.path(installation_id),
      contentType: "application/json",
    });
    try {
      assert.param("installation_id")(() => typia.assert(installation_id));
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
 * Unsuspend an app installation.
 * Removes a GitHub App installation suspension.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 *
 * @tag apps
 * @path app/installations/:installation_id/suspended
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByInstallation_id(
  connection: IConnection<eraseByInstallation_id.Headers>,
  installation_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByInstallation_id.simulate(connection, installation_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByInstallation_id.METADATA,
          path: eraseByInstallation_id.path(installation_id),
          status: null,
        },
      );
}
export namespace eraseByInstallation_id {
  export type Headers = IApiAppInstallationsSuspended.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/app/installations/:installation_id/suspended",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (installation_id: string) =>
    `/app/installations/${encodeURIComponent(installation_id ?? "null")}/suspended`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByInstallation_id.Headers>,
    installation_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByInstallation_id.path(installation_id),
      contentType: "application/json",
    });
    try {
      assert.param("installation_id")(() => typia.assert(installation_id));
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
