import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiLicenses } from "../../structures/IApiLicenses";
import { license } from "../../structures/license";
import { license_minus_simple } from "../../structures/license_minus_simple";

/**
 * Get all commonly used licenses.
 * Lists the most commonly used licenses on GitHub. For more information, see "[Licensing a repository ](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."
 *
 * @tag licenses
 * @path licenses
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
  connection: IConnection<get.Headers>,
  query: get.Query,
): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection, query)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...get.METADATA,
          path: get.path(query),
          status: null,
        },
      );
}
export namespace get {
  export type Headers = IApiLicenses.GetHeader;
  export type Query = IApiLicenses.GetQuery;
  export type Output = license_minus_simple[];

  export const METADATA = {
    method: "GET",
    path: "/licenses",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (query: get.Query) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = "/licenses";
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): license_minus_simple[] => typia.random<license_minus_simple[]>(g);
  export const simulate = (
    connection: IConnection<get.Headers>,
    query: get.Query,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: get.path(query),
      contentType: "application/json",
    });
    try {
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
 * Get a license.
 * Gets information about a specific license. For more information, see "[Licensing a repository ](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."
 *
 * @tag licenses
 * @path licenses/:license
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByLicense(
  connection: IConnection,
  license: string,
): Promise<getByLicense.Output> {
  return !!connection.simulate
    ? getByLicense.simulate(connection, license)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByLicense.METADATA,
          path: getByLicense.path(license),
          status: null,
        },
      );
}
export namespace getByLicense {
  export type Output = license;

  export const METADATA = {
    method: "GET",
    path: "/licenses/:license",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (license: string) =>
    `/licenses/${encodeURIComponent(license ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): license =>
    typia.random<license>(g);
  export const simulate = (
    connection: IConnection,
    license: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByLicense.path(license),
      contentType: "application/json",
    });
    try {
      assert.param("license")(() => typia.assert(license));
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
