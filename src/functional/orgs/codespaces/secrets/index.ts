import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsCodespacesSecrets } from "../../../../structures/IApiOrgsCodespacesSecrets";
import { body } from "../../../../structures/body";
import { codespaces_minus_org_minus_secret } from "../../../../structures/codespaces_minus_org_minus_secret";
import { empty_minus_object } from "../../../../structures/empty_minus_object";
import { response } from "../../../../structures/response";

export * as public_key from "./public_key";
export * as repositories from "./repositories";
/**
 * List organization secrets.
 * Lists all Codespaces development environment secrets available at the organization-level without revealing their encrypted
 * values.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
 *
 * @tag codespaces
 * @path orgs/:org/codespaces/secrets
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
  export type Headers = IApiOrgsCodespacesSecrets.GetHeader;
  export type Output = response;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/codespaces/secrets",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/codespaces/secrets`;
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
 * Get an organization secret.
 * Gets an organization development environment secret without revealing its encrypted value.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
 *
 * @tag codespaces
 * @path orgs/:org/codespaces/secrets/:secret_name
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndSecret_name(
  connection: IConnection<getByOrgAndSecret_name.Headers>,
  org: string,
  secret_name: string,
): Promise<getByOrgAndSecret_name.Output> {
  return !!connection.simulate
    ? getByOrgAndSecret_name.simulate(connection, org, secret_name)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOrgAndSecret_name.METADATA,
          path: getByOrgAndSecret_name.path(org, secret_name),
          status: null,
        },
      );
}
export namespace getByOrgAndSecret_name {
  export type Headers = IApiOrgsCodespacesSecrets.GetHeader;
  export type Output = codespaces_minus_org_minus_secret;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/codespaces/secrets/:secret_name",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, secret_name: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/codespaces/secrets/${encodeURIComponent(secret_name ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): codespaces_minus_org_minus_secret =>
    typia.random<codespaces_minus_org_minus_secret>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndSecret_name.Headers>,
    org: string,
    secret_name: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndSecret_name.path(org, secret_name),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("secret_name")(() => typia.assert(secret_name));
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
 * Create or update an organization secret.
 * Creates or updates an organization development environment secret with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
 *
 * @tag codespaces
 * @path orgs/:org/codespaces/secrets/:secret_name
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOrgAndSecret_name(
  connection: IConnection<putByOrgAndSecret_name.Headers>,
  org: string,
  secret_name: string,
  body: putByOrgAndSecret_name.Input,
): Promise<putByOrgAndSecret_name.Output> {
  return !!connection.simulate
    ? putByOrgAndSecret_name.simulate(connection, org, secret_name, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...putByOrgAndSecret_name.METADATA,
          path: putByOrgAndSecret_name.path(org, secret_name),
          status: null,
        },
        body,
      );
}
export namespace putByOrgAndSecret_name {
  export type Headers = IApiOrgsCodespacesSecrets.PutHeader;
  export type Input = body;
  export type Output = empty_minus_object;

  export const METADATA = {
    method: "PUT",
    path: "/orgs/:org/codespaces/secrets/:secret_name",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, secret_name: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/codespaces/secrets/${encodeURIComponent(secret_name ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): empty_minus_object => typia.random<empty_minus_object>(g);
  export const simulate = (
    connection: IConnection<putByOrgAndSecret_name.Headers>,
    org: string,
    secret_name: string,
    body: putByOrgAndSecret_name.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByOrgAndSecret_name.path(org, secret_name),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("secret_name")(() => typia.assert(secret_name));
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
 * Delete an organization secret.
 * Deletes an organization development environment secret using the secret name.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.
 *
 * @tag codespaces
 * @path orgs/:org/codespaces/secrets/:secret_name
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrgAndSecret_name(
  connection: IConnection<eraseByOrgAndSecret_name.Headers>,
  org: string,
  secret_name: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOrgAndSecret_name.simulate(connection, org, secret_name)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByOrgAndSecret_name.METADATA,
          path: eraseByOrgAndSecret_name.path(org, secret_name),
          status: null,
        },
      );
}
export namespace eraseByOrgAndSecret_name {
  export type Headers = IApiOrgsCodespacesSecrets.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/codespaces/secrets/:secret_name",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, secret_name: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/codespaces/secrets/${encodeURIComponent(secret_name ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOrgAndSecret_name.Headers>,
    org: string,
    secret_name: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrgAndSecret_name.path(org, secret_name),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("secret_name")(() => typia.assert(secret_name));
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
