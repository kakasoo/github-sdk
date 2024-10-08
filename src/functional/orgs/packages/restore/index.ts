import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiOrgsPackagesRestore } from "../../../../structures/IApiOrgsPackagesRestore";

/**
 * Restore a package for an organization.
 * Restores an entire package in an organization.
 *
 * You can restore a deleted package under the following conditions:
 * - The package was deleted within the last 30 days.
 * - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
 *
 * The authenticated user must have admin permissions in the organization to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must also have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
 *
 * OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, the `repo` scope is also required. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 *
 * @tag packages
 * @path orgs/:org/packages/:package_type/:package_name/restore
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOrgAndPackage_typeAndPackage_name(
  connection: IConnection<postByOrgAndPackage_typeAndPackage_name.Headers>,
  org: string,
  package_type: string,
  package_name: string,
  query: postByOrgAndPackage_typeAndPackage_name.Query,
): Promise<void> {
  return !!connection.simulate
    ? postByOrgAndPackage_typeAndPackage_name.simulate(
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
          ...postByOrgAndPackage_typeAndPackage_name.METADATA,
          path: postByOrgAndPackage_typeAndPackage_name.path(
            org,
            package_type,
            package_name,
            query,
          ),
          status: null,
        },
      );
}
export namespace postByOrgAndPackage_typeAndPackage_name {
  export type Headers = IApiOrgsPackagesRestore.PostHeader;
  export type Query = IApiOrgsPackagesRestore.PostQuery;

  export const METADATA = {
    method: "POST",
    path: "/orgs/:org/packages/:package_type/:package_name/restore",
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
    query: postByOrgAndPackage_typeAndPackage_name.Query,
  ) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/orgs/${encodeURIComponent(org ?? "null")}/packages/${encodeURIComponent(package_type ?? "null")}/${encodeURIComponent(package_name ?? "null")}/restore`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<postByOrgAndPackage_typeAndPackage_name.Headers>,
    org: string,
    package_type: string,
    package_name: string,
    query: postByOrgAndPackage_typeAndPackage_name.Query,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOrgAndPackage_typeAndPackage_name.path(
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
