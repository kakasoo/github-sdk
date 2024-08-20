import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposDependabotAlerts } from "../../../../structures/IApiReposDependabotAlerts";
import { dependabot_minus_alert } from "../../../../structures/dependabot_minus_alert";
import { body } from "../../../../structures/body";
/**
 * List Dependabot alerts for a repository.
 * OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.
 *
 * @tag dependabot
 * @path repos/:owner/:repo/dependabot/alerts
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepo(
  connection: IConnection<getByOwnerAndRepo.Headers>,
  owner: string,
  repo: string,
  query: getByOwnerAndRepo.Query,
): Promise<getByOwnerAndRepo.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepo.simulate(connection, owner, repo, query)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOwnerAndRepo.METADATA,
          path: getByOwnerAndRepo.path(owner, repo, query),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepo {
  export type Headers = IApiReposDependabotAlerts.GetHeader;
  export type Query = IApiReposDependabotAlerts.GetQuery;
  export type Output = dependabot_minus_alert[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/dependabot/alerts",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    owner: string,
    repo: string,
    query: getByOwnerAndRepo.Query,
  ) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/dependabot/alerts`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): dependabot_minus_alert[] => typia.random<dependabot_minus_alert[]>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepo.Headers>,
    owner: string,
    repo: string,
    query: getByOwnerAndRepo.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepo.path(owner, repo, query),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
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
 * Get a Dependabot alert.
 * OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.
 *
 * @tag dependabot
 * @path repos/:owner/:repo/dependabot/alerts/:alert_number
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndAlert_number(
  connection: IConnection<getByOwnerAndRepoAndAlert_number.Headers>,
  owner: string,
  repo: string,
  alert_number: string,
): Promise<getByOwnerAndRepoAndAlert_number.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndAlert_number.simulate(
        connection,
        owner,
        repo,
        alert_number,
      )
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOwnerAndRepoAndAlert_number.METADATA,
          path: getByOwnerAndRepoAndAlert_number.path(
            owner,
            repo,
            alert_number,
          ),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndAlert_number {
  export type Headers = IApiReposDependabotAlerts.GetHeader;
  export type Output = dependabot_minus_alert;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/dependabot/alerts/:alert_number",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, alert_number: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/dependabot/alerts/${encodeURIComponent(alert_number ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): dependabot_minus_alert => typia.random<dependabot_minus_alert>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndAlert_number.Headers>,
    owner: string,
    repo: string,
    alert_number: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndAlert_number.path(owner, repo, alert_number),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("alert_number")(() => typia.assert(alert_number));
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
 * Update a Dependabot alert.
 * The authenticated user must have access to security alerts for the repository to use this endpoint. For more information, see "[Granting access to security alerts](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."
 *
 * OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.
 *
 * @tag dependabot
 * @path repos/:owner/:repo/dependabot/alerts/:alert_number
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function patchByOwnerAndRepoAndAlert_number(
  connection: IConnection<patchByOwnerAndRepoAndAlert_number.Headers>,
  owner: string,
  repo: string,
  alert_number: string,
  body: patchByOwnerAndRepoAndAlert_number.Input,
): Promise<patchByOwnerAndRepoAndAlert_number.Output> {
  return !!connection.simulate
    ? patchByOwnerAndRepoAndAlert_number.simulate(
        connection,
        owner,
        repo,
        alert_number,
        body,
      )
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...patchByOwnerAndRepoAndAlert_number.METADATA,
          path: patchByOwnerAndRepoAndAlert_number.path(
            owner,
            repo,
            alert_number,
          ),
          status: null,
        },
        body,
      );
}
export namespace patchByOwnerAndRepoAndAlert_number {
  export type Headers = IApiReposDependabotAlerts.PatchHeader;
  export type Input = body;
  export type Output = dependabot_minus_alert;

  export const METADATA = {
    method: "PATCH",
    path: "/repos/:owner/:repo/dependabot/alerts/:alert_number",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, alert_number: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/dependabot/alerts/${encodeURIComponent(alert_number ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): dependabot_minus_alert => typia.random<dependabot_minus_alert>(g);
  export const simulate = (
    connection: IConnection<patchByOwnerAndRepoAndAlert_number.Headers>,
    owner: string,
    repo: string,
    alert_number: string,
    body: patchByOwnerAndRepoAndAlert_number.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: patchByOwnerAndRepoAndAlert_number.path(owner, repo, alert_number),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("alert_number")(() => typia.assert(alert_number));
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