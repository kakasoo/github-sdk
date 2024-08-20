import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia, { tags } from "typia";

import { IApiOrgsRulesets } from "../../../structures/IApiOrgsRulesets";
import { body } from "../../../structures/body";
import { repository_minus_ruleset } from "../../../structures/repository_minus_ruleset";

export * as rule_suites from "./rule_suites";
/**
 * Get all organization repository rulesets.
 * Get all the repository rulesets for an organization.
 *
 * @tag repos
 * @path orgs/:org/rulesets
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
  export type Headers = IApiOrgsRulesets.GetHeader;
  export type Output = repository_minus_ruleset[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/rulesets",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/rulesets`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): repository_minus_ruleset[] => typia.random<repository_minus_ruleset[]>(g);
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
 * Create an organization repository ruleset.
 * Create a repository ruleset for an organization.
 *
 * @param body Request body
 * @tag repos
 * @path orgs/:org/rulesets
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOrg(
  connection: IConnection<postByOrg.Headers>,
  org: string,
  body: postByOrg.Input,
): Promise<postByOrg.Output> {
  return !!connection.simulate
    ? postByOrg.simulate(connection, org, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByOrg.METADATA,
          path: postByOrg.path(org),
          status: null,
        },
        body,
      );
}
export namespace postByOrg {
  export type Headers = IApiOrgsRulesets.PostHeader;
  export type Input = body;
  export type Output = repository_minus_ruleset;

  export const METADATA = {
    method: "POST",
    path: "/orgs/:org/rulesets",
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
    `/orgs/${encodeURIComponent(org ?? "null")}/rulesets`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): repository_minus_ruleset => typia.random<repository_minus_ruleset>(g);
  export const simulate = (
    connection: IConnection<postByOrg.Headers>,
    org: string,
    body: postByOrg.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOrg.path(org),
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
 * Get an organization repository ruleset.
 * Get a repository ruleset for an organization.
 *
 * **Note:** To prevent leaking sensitive information, the `bypass_actors` property is only returned if the user
 * making the API request has write access to the ruleset.
 *
 * @param ruleset_id The ID of the ruleset.
 * @tag repos
 * @path orgs/:org/rulesets/:ruleset_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndRuleset_id(
  connection: IConnection<getByOrgAndRuleset_id.Headers>,
  org: string,
  ruleset_id: number & tags.Type<"int32">,
): Promise<getByOrgAndRuleset_id.Output> {
  return !!connection.simulate
    ? getByOrgAndRuleset_id.simulate(connection, org, ruleset_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOrgAndRuleset_id.METADATA,
          path: getByOrgAndRuleset_id.path(org, ruleset_id),
          status: null,
        },
      );
}
export namespace getByOrgAndRuleset_id {
  export type Headers = IApiOrgsRulesets.GetHeader;
  export type Output = repository_minus_ruleset;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/rulesets/:ruleset_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, ruleset_id: number & tags.Type<"int32">) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/rulesets/${encodeURIComponent(ruleset_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): repository_minus_ruleset => typia.random<repository_minus_ruleset>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndRuleset_id.Headers>,
    org: string,
    ruleset_id: number & tags.Type<"int32">,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndRuleset_id.path(org, ruleset_id),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("ruleset_id")(() => typia.assert(ruleset_id));
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
 * Update an organization repository ruleset.
 * Update a ruleset for an organization.
 *
 * @param ruleset_id The ID of the ruleset.
 * @param body Request body
 * @tag repos
 * @path orgs/:org/rulesets/:ruleset_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOrgAndRuleset_id(
  connection: IConnection<putByOrgAndRuleset_id.Headers>,
  org: string,
  ruleset_id: number & tags.Type<"int32">,
  body: putByOrgAndRuleset_id.Input,
): Promise<putByOrgAndRuleset_id.Output> {
  return !!connection.simulate
    ? putByOrgAndRuleset_id.simulate(connection, org, ruleset_id, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...putByOrgAndRuleset_id.METADATA,
          path: putByOrgAndRuleset_id.path(org, ruleset_id),
          status: null,
        },
        body,
      );
}
export namespace putByOrgAndRuleset_id {
  export type Headers = IApiOrgsRulesets.PutHeader;
  export type Input = body;
  export type Output = repository_minus_ruleset;

  export const METADATA = {
    method: "PUT",
    path: "/orgs/:org/rulesets/:ruleset_id",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, ruleset_id: number & tags.Type<"int32">) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/rulesets/${encodeURIComponent(ruleset_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): repository_minus_ruleset => typia.random<repository_minus_ruleset>(g);
  export const simulate = (
    connection: IConnection<putByOrgAndRuleset_id.Headers>,
    org: string,
    ruleset_id: number & tags.Type<"int32">,
    body: putByOrgAndRuleset_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByOrgAndRuleset_id.path(org, ruleset_id),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("ruleset_id")(() => typia.assert(ruleset_id));
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
 * Delete an organization repository ruleset.
 * Delete a ruleset for an organization.
 *
 * @param ruleset_id The ID of the ruleset.
 * @tag repos
 * @path orgs/:org/rulesets/:ruleset_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrgAndRuleset_id(
  connection: IConnection<eraseByOrgAndRuleset_id.Headers>,
  org: string,
  ruleset_id: number & tags.Type<"int32">,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOrgAndRuleset_id.simulate(connection, org, ruleset_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByOrgAndRuleset_id.METADATA,
          path: eraseByOrgAndRuleset_id.path(org, ruleset_id),
          status: null,
        },
      );
}
export namespace eraseByOrgAndRuleset_id {
  export type Headers = IApiOrgsRulesets.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/rulesets/:ruleset_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, ruleset_id: number & tags.Type<"int32">) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/rulesets/${encodeURIComponent(ruleset_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOrgAndRuleset_id.Headers>,
    org: string,
    ruleset_id: number & tags.Type<"int32">,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrgAndRuleset_id.path(org, ruleset_id),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("ruleset_id")(() => typia.assert(ruleset_id));
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
