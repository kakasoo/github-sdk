import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposPullsCodespaces } from "../../../../structures/IApiReposPullsCodespaces";
import { body } from "../../../../structures/body";
import { codespace } from "../../../../structures/codespace";

/**
 * Create a codespace from a pull request.
 * Creates a codespace owned by the authenticated user for the specified pull request.
 *
 * OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.
 *
 * @tag codespaces
 * @path repos/:owner/:repo/pulls/:pull_number/codespaces
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepoAndPull_number(
  connection: IConnection<postByOwnerAndRepoAndPull_number.Headers>,
  owner: string,
  repo: string,
  pull_number: string,
  body: postByOwnerAndRepoAndPull_number.Input,
): Promise<postByOwnerAndRepoAndPull_number.Output> {
  return !!connection.simulate
    ? postByOwnerAndRepoAndPull_number.simulate(
        connection,
        owner,
        repo,
        pull_number,
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
          ...postByOwnerAndRepoAndPull_number.METADATA,
          path: postByOwnerAndRepoAndPull_number.path(owner, repo, pull_number),
          status: null,
        },
        body,
      );
}
export namespace postByOwnerAndRepoAndPull_number {
  export type Headers = IApiReposPullsCodespaces.PostHeader;
  export type Input = body;
  export type Output = codespace;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/pulls/:pull_number/codespaces",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, pull_number: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/pulls/${encodeURIComponent(pull_number ?? "null")}/codespaces`;
  export const random = (g?: Partial<typia.IRandomGenerator>): codespace =>
    typia.random<codespace>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepoAndPull_number.Headers>,
    owner: string,
    repo: string,
    pull_number: string,
    body: postByOwnerAndRepoAndPull_number.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepoAndPull_number.path(owner, repo, pull_number),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("pull_number")(() => typia.assert(pull_number));
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
