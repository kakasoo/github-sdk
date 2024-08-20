import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposCheckSuites } from "../../../structures/IApiReposCheckSuites";
import { body } from "../../../structures/body";
import { check_minus_suite } from "../../../structures/check_minus_suite";

export * as preferences from "./preferences";
export * as check_runs from "./check_runs";
export * as rerequest from "./rerequest";
/**
 * Create a check suite.
 * Creates a check suite manually. By default, check suites are automatically created when you create a [check run](https://docs.github.com/rest/checks/runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://docs.github.com/rest/checks/suites#update-repository-preferences-for-check-suites)".
 *
 * > [!NOTE]
 * > The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
 *
 * OAuth apps and personal access tokens (classic) cannot use this endpoint.
 *
 * @tag checks
 * @path repos/:owner/:repo/check-suites
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepo(
  connection: IConnection<postByOwnerAndRepo.Headers>,
  owner: string,
  repo: string,
  body: postByOwnerAndRepo.Input,
): Promise<postByOwnerAndRepo.Output> {
  return !!connection.simulate
    ? postByOwnerAndRepo.simulate(connection, owner, repo, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByOwnerAndRepo.METADATA,
          path: postByOwnerAndRepo.path(owner, repo),
          status: null,
        },
        body,
      );
}
export namespace postByOwnerAndRepo {
  export type Headers = IApiReposCheckSuites.PostHeader;
  export type Input = body;
  export type Output = check_minus_suite;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/check-suites",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/check-suites`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): check_minus_suite => typia.random<check_minus_suite>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepo.Headers>,
    owner: string,
    repo: string,
    body: postByOwnerAndRepo.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepo.path(owner, repo),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
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
 * Get a check suite.
 * Gets a single check suite using its `id`.
 *
 * > [!NOTE]
 * > The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.
 *
 * @tag checks
 * @path repos/:owner/:repo/check-suites/:check_suite_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndCheck_suite_id(
  connection: IConnection<getByOwnerAndRepoAndCheck_suite_id.Headers>,
  owner: string,
  repo: string,
  check_suite_id: string,
): Promise<getByOwnerAndRepoAndCheck_suite_id.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndCheck_suite_id.simulate(
        connection,
        owner,
        repo,
        check_suite_id,
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
          ...getByOwnerAndRepoAndCheck_suite_id.METADATA,
          path: getByOwnerAndRepoAndCheck_suite_id.path(
            owner,
            repo,
            check_suite_id,
          ),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndCheck_suite_id {
  export type Headers = IApiReposCheckSuites.GetHeader;
  export type Output = check_minus_suite;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/check-suites/:check_suite_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, check_suite_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/check-suites/${encodeURIComponent(check_suite_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): check_minus_suite => typia.random<check_minus_suite>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndCheck_suite_id.Headers>,
    owner: string,
    repo: string,
    check_suite_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndCheck_suite_id.path(
        owner,
        repo,
        check_suite_id,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("check_suite_id")(() => typia.assert(check_suite_id));
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
