import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiUsersPackagesVersions } from "../../../../structures/IApiUsersPackagesVersions";
import { package_minus_version } from "../../../../structures/package_minus_version";
export * as restore from "./restore";
/**
 * List package versions for a package owned by a user.
 * Lists package versions for a public package owned by a specified user.
 *
 * OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, the `repo` scope is also required. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 *
 * @tag packages
 * @path users/:username/packages/:package_type/:package_name/versions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByUsernameAndPackage_typeAndPackage_name(
  connection: IConnection<getByUsernameAndPackage_typeAndPackage_name.Headers>,
  username: string,
  package_type: string,
  package_name: string,
): Promise<getByUsernameAndPackage_typeAndPackage_name.Output> {
  return !!connection.simulate
    ? getByUsernameAndPackage_typeAndPackage_name.simulate(
        connection,
        username,
        package_type,
        package_name,
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
          ...getByUsernameAndPackage_typeAndPackage_name.METADATA,
          path: getByUsernameAndPackage_typeAndPackage_name.path(
            username,
            package_type,
            package_name,
          ),
          status: null,
        },
      );
}
export namespace getByUsernameAndPackage_typeAndPackage_name {
  export type Headers = IApiUsersPackagesVersions.GetHeader;
  export type Output = package_minus_version[];

  export const METADATA = {
    method: "GET",
    path: "/users/:username/packages/:package_type/:package_name/versions",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    username: string,
    package_type: string,
    package_name: string,
  ) =>
    `/users/${encodeURIComponent(username ?? "null")}/packages/${encodeURIComponent(package_type ?? "null")}/${encodeURIComponent(package_name ?? "null")}/versions`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): package_minus_version[] => typia.random<package_minus_version[]>(g);
  export const simulate = (
    connection: IConnection<getByUsernameAndPackage_typeAndPackage_name.Headers>,
    username: string,
    package_type: string,
    package_name: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByUsernameAndPackage_typeAndPackage_name.path(
        username,
        package_type,
        package_name,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("username")(() => typia.assert(username));
      assert.param("package_type")(() => typia.assert(package_type));
      assert.param("package_name")(() => typia.assert(package_name));
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
 * Get a package version for a user.
 * Gets a specific package version for a public package owned by a specified user.
 *
 * OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, the `repo` scope is also required. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 *
 * @tag packages
 * @path users/:username/packages/:package_type/:package_name/versions/:package_version_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id(
  connection: IConnection<getByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id.Headers>,
  username: string,
  package_type: string,
  package_name: string,
  package_version_id: string,
): Promise<getByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id.Output> {
  return !!connection.simulate
    ? getByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id.simulate(
        connection,
        username,
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
          ...getByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id.METADATA,
          path: getByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id.path(
            username,
            package_type,
            package_name,
            package_version_id,
          ),
          status: null,
        },
      );
}
export namespace getByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id {
  export type Headers = IApiUsersPackagesVersions.GetHeader;
  export type Output = package_minus_version;

  export const METADATA = {
    method: "GET",
    path: "/users/:username/packages/:package_type/:package_name/versions/:package_version_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    username: string,
    package_type: string,
    package_name: string,
    package_version_id: string,
  ) =>
    `/users/${encodeURIComponent(username ?? "null")}/packages/${encodeURIComponent(package_type ?? "null")}/${encodeURIComponent(package_name ?? "null")}/versions/${encodeURIComponent(package_version_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): package_minus_version => typia.random<package_minus_version>(g);
  export const simulate = (
    connection: IConnection<getByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id.Headers>,
    username: string,
    package_type: string,
    package_name: string,
    package_version_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id.path(
        username,
        package_type,
        package_name,
        package_version_id,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("username")(() => typia.assert(username));
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
 * Delete package version for a user.
 * Deletes a specific package version for a user. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
 *
 * If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
 *
 * OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, the `repo` scope is also required. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 *
 * @tag packages
 * @path users/:username/packages/:package_type/:package_name/versions/:package_version_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id(
  connection: IConnection<eraseByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id.Headers>,
  username: string,
  package_type: string,
  package_name: string,
  package_version_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id.simulate(
        connection,
        username,
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
          ...eraseByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id.METADATA,
          path: eraseByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id.path(
            username,
            package_type,
            package_name,
            package_version_id,
          ),
          status: null,
        },
      );
}
export namespace eraseByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id {
  export type Headers = IApiUsersPackagesVersions.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/users/:username/packages/:package_type/:package_name/versions/:package_version_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    username: string,
    package_type: string,
    package_name: string,
    package_version_id: string,
  ) =>
    `/users/${encodeURIComponent(username ?? "null")}/packages/${encodeURIComponent(package_type ?? "null")}/${encodeURIComponent(package_name ?? "null")}/versions/${encodeURIComponent(package_version_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id.Headers>,
    username: string,
    package_type: string,
    package_name: string,
    package_version_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByUsernameAndPackage_typeAndPackage_nameAndPackage_version_id.path(
        username,
        package_type,
        package_name,
        package_version_id,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("username")(() => typia.assert(username));
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
