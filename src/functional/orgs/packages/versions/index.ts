import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsPackagesVersions } from "../../../../structures/IApiOrgsPackagesVersions";
import { package_minus_version } from "../../../../structures/package_minus_version";

export * as restore from "./restore";
/**
 * List package versions for a package owned by an organization.
 * Lists package versions for a package owned by an organization.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint if the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 *
 * @tag packages
 * @path orgs/:org/packages/:package_type/:package_name/versions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndPackage_typeAndPackage_name(
  connection: IConnection<getByOrgAndPackage_typeAndPackage_name.Headers>,
  org: string,
  package_type: string,
  package_name: string,
  query: getByOrgAndPackage_typeAndPackage_name.Query,
): Promise<getByOrgAndPackage_typeAndPackage_name.Output> {
  return !!connection.simulate
    ? getByOrgAndPackage_typeAndPackage_name.simulate(
        connection,
        org,
        package_type,
        package_name,
        query,
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
          ...getByOrgAndPackage_typeAndPackage_name.METADATA,
          path: getByOrgAndPackage_typeAndPackage_name.path(
            org,
            package_type,
            package_name,
            query,
          ),
          status: null,
        },
      );
}
export namespace getByOrgAndPackage_typeAndPackage_name {
  export type Headers = IApiOrgsPackagesVersions.GetHeader;
  export type Query = IApiOrgsPackagesVersions.GetQuery;
  export type Output = package_minus_version[];

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/packages/:package_type/:package_name/versions",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    org: string,
    package_type: string,
    package_name: string,
    query: getByOrgAndPackage_typeAndPackage_name.Query,
  ) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/orgs/${encodeURIComponent(org ?? "null")}/packages/${encodeURIComponent(package_type ?? "null")}/${encodeURIComponent(package_name ?? "null")}/versions`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): package_minus_version[] => typia.random<package_minus_version[]>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndPackage_typeAndPackage_name.Headers>,
    org: string,
    package_type: string,
    package_name: string,
    query: getByOrgAndPackage_typeAndPackage_name.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndPackage_typeAndPackage_name.path(
        org,
        package_type,
        package_name,
        query,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("package_type")(() => typia.assert(package_type));
      assert.param("package_name")(() => typia.assert(package_name));
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
 * Get a package version for an organization.
 * Gets a specific package version in an organization.
 *
 * OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, the `repo` scope is also required. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 *
 * @tag packages
 * @path orgs/:org/packages/:package_type/:package_name/versions/:package_version_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOrgAndPackage_typeAndPackage_nameAndPackage_version_id(
  connection: IConnection<getByOrgAndPackage_typeAndPackage_nameAndPackage_version_id.Headers>,
  org: string,
  package_type: string,
  package_name: string,
  package_version_id: string,
): Promise<getByOrgAndPackage_typeAndPackage_nameAndPackage_version_id.Output> {
  return !!connection.simulate
    ? getByOrgAndPackage_typeAndPackage_nameAndPackage_version_id.simulate(
        connection,
        org,
        package_type,
        package_name,
        package_version_id,
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
          ...getByOrgAndPackage_typeAndPackage_nameAndPackage_version_id.METADATA,
          path: getByOrgAndPackage_typeAndPackage_nameAndPackage_version_id.path(
            org,
            package_type,
            package_name,
            package_version_id,
          ),
          status: null,
        },
      );
}
export namespace getByOrgAndPackage_typeAndPackage_nameAndPackage_version_id {
  export type Headers = IApiOrgsPackagesVersions.GetHeader;
  export type Output = package_minus_version;

  export const METADATA = {
    method: "GET",
    path: "/orgs/:org/packages/:package_type/:package_name/versions/:package_version_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    org: string,
    package_type: string,
    package_name: string,
    package_version_id: string,
  ) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/packages/${encodeURIComponent(package_type ?? "null")}/${encodeURIComponent(package_name ?? "null")}/versions/${encodeURIComponent(package_version_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): package_minus_version => typia.random<package_minus_version>(g);
  export const simulate = (
    connection: IConnection<getByOrgAndPackage_typeAndPackage_nameAndPackage_version_id.Headers>,
    org: string,
    package_type: string,
    package_name: string,
    package_version_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOrgAndPackage_typeAndPackage_nameAndPackage_version_id.path(
        org,
        package_type,
        package_name,
        package_version_id,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("package_type")(() => typia.assert(package_type));
      assert.param("package_name")(() => typia.assert(package_name));
      assert.param("package_version_id")(() =>
        typia.assert(package_version_id),
      );
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
 * Delete package version for an organization.
 * Deletes a specific package version in an organization. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
 *
 * The authenticated user must have admin permissions in the organization to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must also have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
 *
 * OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, the `repo` scope is also required. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 *
 * @tag packages
 * @path orgs/:org/packages/:package_type/:package_name/versions/:package_version_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOrgAndPackage_typeAndPackage_nameAndPackage_version_id(
  connection: IConnection<eraseByOrgAndPackage_typeAndPackage_nameAndPackage_version_id.Headers>,
  org: string,
  package_type: string,
  package_name: string,
  package_version_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOrgAndPackage_typeAndPackage_nameAndPackage_version_id.simulate(
        connection,
        org,
        package_type,
        package_name,
        package_version_id,
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
          ...eraseByOrgAndPackage_typeAndPackage_nameAndPackage_version_id.METADATA,
          path: eraseByOrgAndPackage_typeAndPackage_nameAndPackage_version_id.path(
            org,
            package_type,
            package_name,
            package_version_id,
          ),
          status: null,
        },
      );
}
export namespace eraseByOrgAndPackage_typeAndPackage_nameAndPackage_version_id {
  export type Headers = IApiOrgsPackagesVersions.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/orgs/:org/packages/:package_type/:package_name/versions/:package_version_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    org: string,
    package_type: string,
    package_name: string,
    package_version_id: string,
  ) =>
    `/orgs/${encodeURIComponent(org ?? "null")}/packages/${encodeURIComponent(package_type ?? "null")}/${encodeURIComponent(package_name ?? "null")}/versions/${encodeURIComponent(package_version_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOrgAndPackage_typeAndPackage_nameAndPackage_version_id.Headers>,
    org: string,
    package_type: string,
    package_name: string,
    package_version_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOrgAndPackage_typeAndPackage_nameAndPackage_version_id.path(
        org,
        package_type,
        package_name,
        package_version_id,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("org")(() => typia.assert(org));
      assert.param("package_type")(() => typia.assert(package_type));
      assert.param("package_name")(() => typia.assert(package_name));
      assert.param("package_version_id")(() =>
        typia.assert(package_version_id),
      );
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
