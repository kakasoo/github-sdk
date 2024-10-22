import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposHooksTests } from "../../../../structures/IApiReposHooksTests";

/**
 * Test the push repository webhook.
 * This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.
 *
 * > [!NOTE]
 * > Previously `/repos/:owner/:repo/hooks/:hook_id/test`
 *
 * @tag repos
 * @path repos/:owner/:repo/hooks/:hook_id/tests
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepoAndHook_id(
  connection: IConnection<postByOwnerAndRepoAndHook_id.Headers>,
  owner: string,
  repo: string,
  hook_id: string,
): Promise<void> {
  return !!connection.simulate
    ? postByOwnerAndRepoAndHook_id.simulate(connection, owner, repo, hook_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByOwnerAndRepoAndHook_id.METADATA,
          path: postByOwnerAndRepoAndHook_id.path(owner, repo, hook_id),
          status: null,
        },
      );
}
export namespace postByOwnerAndRepoAndHook_id {
  export type Headers = IApiReposHooksTests.PostHeader;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/hooks/:hook_id/tests",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, hook_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/hooks/${encodeURIComponent(hook_id ?? "null")}/tests`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepoAndHook_id.Headers>,
    owner: string,
    repo: string,
    hook_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepoAndHook_id.path(owner, repo, hook_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("hook_id")(() => typia.assert(hook_id));
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
