import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia, { tags } from "typia";

import { IApiOrgsActionsSecretsRepositories } from "../../../../../structures/IApiOrgsActionsSecretsRepositories";
import { body } from "../../../../../structures/body";
import { response } from "../../../../../structures/response";

/**
 * List selected repositories for an organization secret.
 * Lists all repositories that have been selected when the `visibility`
 * for repository access to a secret is set to `selected`.
 *
 * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
 *
 * @tag actions
 * @path orgs/:org/actions/secrets/:secret_name/repositories
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
  export type Headers = IApiOrgsActionsSecretsRepositories.GetHeader;
  export type Output = response;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/actions/secrets/:secret_name/repositories",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (org: string, secret_name: string) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/actions/secrets/${encodeURIComponent(secret_name ?? "null")}/repositories`;
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
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
 * Set selected repositories for an organization secret.
 * Replaces all repositories for an organization secret when the `visibility`
 * for repository access is set to `selected`. The visibility is set when you [Create
 * or update an organization secret](https://docs.github.com/rest/actions/secrets#create-or-update-an-organization-secret).
 *
 * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
 *
 * @tag actions
 * @path orgs/:org/actions/secrets/:secret_name/repositories
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOrgAndSecret_name(
  connection: IConnection<putByOrgAndSecret_name.Headers>,
  org: string,
  secret_name: string,
  body: putByOrgAndSecret_name.Input,
): Promise<void> {
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
  export type Headers = IApiOrgsActionsSecretsRepositories.PutHeader;
  export type Input = body;

  export const METADATA = {
    method: "PUT",
    path: "/orgs/:org/actions/secrets/:secret_name/repositories",
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
    `/orgs/${encodeURIComponent(org ?? "null")}/actions/secrets/${encodeURIComponent(secret_name ?? "null")}/repositories`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<putByOrgAndSecret_name.Headers>,
    org: string,
    secret_name: string,
    body: putByOrgAndSecret_name.Input,
  ): void => {
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
 * Add selected repository to an organization secret.
 * Adds a repository to an organization secret when the `visibility` for
 * repository access is set to `selected`. For more information about setting the visibility, see [Create or
 * update an organization secret](https://docs.github.com/rest/actions/secrets#create-or-update-an-organization-secret).
 *
 * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
 *
 * OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path orgs/:org/actions/secrets/:secret_name/repositories/:repository_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOrgAndSecret_nameAndRepository_id(
  connection: IConnection<putByOrgAndSecret_nameAndRepository_id.Headers>,
  org: string,
  secret_name: string,
  repository_id: number & tags.Type<"int32">,
): Promise<void> {
  return !!connection.simulate
    ? putByOrgAndSecret_nameAndRepository_id.simulate(
        connection,
        org,
        secret_name,
        repository_id,
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
          ...putByOrgAndSecret_nameAndRepository_id.METADATA,
          path: putByOrgAndSecret_nameAndRepository_id.path(
            org,
            secret_name,
            repository_id,
          ),
          status: null,
        },
      );
}
export namespace putByOrgAndSecret_nameAndRepository_id {
  export type Headers = IApiOrgsActionsSecretsRepositories.PutHeader;

  export const METADATA = {
    method: "PUT",
    path: "/orgs/:org/actions/secrets/:secret_name/repositories/:repository_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    org: string,
    secret_name: string,
    repository_id: number & tags.Type<"int32">,
  ) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/actions/secrets/${encodeURIComponent(secret_name ?? "null")}/repositories/${encodeURIComponent(repository_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<putByOrgAndSecret_nameAndRepository_id.Headers>,
    org: string,
    secret_name: string,
    repository_id: number & tags.Type<"int32">,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByOrgAndSecret_nameAndRepository_id.path(
        org,
        secret_name,
        repository_id,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("secret_name")(() => typia.assert(secret_name));
      assert.param("repository_id")(() => typia.assert(repository_id));
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
 * Remove selected repository from an organization secret.
 * Removes a repository from an organization secret when the `visibility`
 * for repository access is set to `selected`. The visibility is set when you [Create
 * or update an organization secret](https://docs.github.com/rest/actions/secrets#create-or-update-an-organization-secret).
 *
 * Authenticated users must have collaborator access to a repository to create, update, or read secrets.
 *
 * OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.
 *
 * @tag actions
 * @path orgs/:org/actions/secrets/:secret_name/repositories/:repository_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrgAndSecret_nameAndRepository_id(
  connection: IConnection<eraseByOrgAndSecret_nameAndRepository_id.Headers>,
  org: string,
  secret_name: string,
  repository_id: number & tags.Type<"int32">,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOrgAndSecret_nameAndRepository_id.simulate(
        connection,
        org,
        secret_name,
        repository_id,
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
          ...eraseByOrgAndSecret_nameAndRepository_id.METADATA,
          path: eraseByOrgAndSecret_nameAndRepository_id.path(
            org,
            secret_name,
            repository_id,
          ),
          status: null,
        },
      );
}
export namespace eraseByOrgAndSecret_nameAndRepository_id {
  export type Headers = IApiOrgsActionsSecretsRepositories.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/actions/secrets/:secret_name/repositories/:repository_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    org: string,
    secret_name: string,
    repository_id: number & tags.Type<"int32">,
  ) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/actions/secrets/${encodeURIComponent(secret_name ?? "null")}/repositories/${encodeURIComponent(repository_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOrgAndSecret_nameAndRepository_id.Headers>,
    org: string,
    secret_name: string,
    repository_id: number & tags.Type<"int32">,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrgAndSecret_nameAndRepository_id.path(
        org,
        secret_name,
        repository_id,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("secret_name")(() => typia.assert(secret_name));
      assert.param("repository_id")(() => typia.assert(repository_id));
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
