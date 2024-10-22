import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiAppInstallationsAccessTokens } from "../../../../structures/IApiAppInstallationsAccessTokens";
import { body } from "../../../../structures/body";
import { installation_minus_token } from "../../../../structures/installation_minus_token";

/**
 * Create an installation access token for an app.
 * Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access.
 *
 * Optionally, you can use the `repositories` or `repository_ids` body parameters to specify individual repositories that the installation access token can access. If you don't use `repositories` or `repository_ids` to grant access to specific repositories, the installation access token will have access to all repositories that the installation was granted access to. The installation access token cannot be granted access to repositories that the installation was not granted access to. Up to 500 repositories can be listed in this manner.
 *
 * Optionally, use the `permissions` body parameter to specify the permissions that the installation access token should have. If `permissions` is not specified, the installation access token will have all of the permissions that were granted to the app. The installation access token cannot be granted permissions that the app was not granted.
 *
 * When using the repository or permission parameters to reduce the access of the token, the complexity of the token is increased due to both the number of permissions in the request and the number of repositories the token will have access to. If the complexity is too large, the token will fail to be issued. If this occurs, the error message will indicate the maximum number of repositories that should be requested. For the average application requesting 8 permissions, this limit is around 5000 repositories. With fewer permissions requested, more repositories are supported.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 *
 * @tag apps
 * @path app/installations/:installation_id/access_tokens
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByInstallation_id(
  connection: IConnection<postByInstallation_id.Headers>,
  installation_id: string,
  body: postByInstallation_id.Input,
): Promise<postByInstallation_id.Output> {
  return !!connection.simulate
    ? postByInstallation_id.simulate(connection, installation_id, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByInstallation_id.METADATA,
          path: postByInstallation_id.path(installation_id),
          status: null,
        },
        body,
      );
}
export namespace postByInstallation_id {
  export type Headers = IApiAppInstallationsAccessTokens.PostHeader;
  export type Input = body;
  export type Output = installation_minus_token;

  export const METADATA = {
    method: "POST",
    path: "/app/installations/:installation_id/access_tokens",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (installation_id: string) =>
    `/app/installations/${encodeURIComponent(installation_id ?? "null")}/access_tokens`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): installation_minus_token => typia.random<installation_minus_token>(g);
  export const simulate = (
    connection: IConnection<postByInstallation_id.Headers>,
    installation_id: string,
    body: postByInstallation_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByInstallation_id.path(installation_id),
      contentType: "application/json",
    });
    try {
      assert.param("installation_id")(() => typia.assert(installation_id));
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
