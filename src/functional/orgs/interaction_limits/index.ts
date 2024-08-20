import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiOrgsInteractionLimits } from "../../../structures/IApiOrgsInteractionLimits";
import { response } from "../../../structures/response";
import { interaction_minus_limit } from "../../../structures/interaction_minus_limit";
import { interaction_minus_limit_minus_response } from "../../../structures/interaction_minus_limit_minus_response";
/**
 * Get interaction restrictions for an organization.
 * Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.
 *
 * @tag interactions
 * @path orgs/:org/interaction-limits
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrg(
  connection: IConnection<getByOrg.Headers>,
  org: string,
): Promise<getByOrg.Output> {
  return !!connection.simulate
    ? getByOrg.simulate(connection, org)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOrg.METADATA,
          path: getByOrg.path(org),
          status: null,
        },
      );
}
export namespace getByOrg {
  export type Headers = IApiOrgsInteractionLimits.GetHeader;
  export type Output = response;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/interaction-limits",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/interaction-limits`;
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
  export const simulate = (
    connection: IConnection<getByOrg.Headers>,
    org: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrg.path(org),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
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
 * Set interaction restrictions for an organization.
 * Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.
 *
 * @tag interactions
 * @path orgs/:org/interaction-limits
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOrg(
  connection: IConnection<putByOrg.Headers>,
  org: string,
  body: putByOrg.Input,
): Promise<putByOrg.Output> {
  return !!connection.simulate
    ? putByOrg.simulate(connection, org, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...putByOrg.METADATA,
          path: putByOrg.path(org),
          status: null,
        },
        body,
      );
}
export namespace putByOrg {
  export type Headers = IApiOrgsInteractionLimits.PutHeader;
  export type Input = interaction_minus_limit;
  export type Output = interaction_minus_limit_minus_response;

  export const METADATA = {
    method: "PUT",
    path: "/orgs/:org/interaction-limits",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/interaction-limits`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): interaction_minus_limit_minus_response =>
    typia.random<interaction_minus_limit_minus_response>(g);
  export const simulate = (
    connection: IConnection<putByOrg.Headers>,
    org: string,
    body: putByOrg.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByOrg.path(org),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
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
 * Remove interaction restrictions for an organization.
 * Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.
 *
 * @tag interactions
 * @path orgs/:org/interaction-limits
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrg(
  connection: IConnection<eraseByOrg.Headers>,
  org: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOrg.simulate(connection, org)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByOrg.METADATA,
          path: eraseByOrg.path(org),
          status: null,
        },
      );
}
export namespace eraseByOrg {
  export type Headers = IApiOrgsInteractionLimits.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/interaction-limits",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/interaction-limits`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOrg.Headers>,
    org: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrg.path(org),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
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