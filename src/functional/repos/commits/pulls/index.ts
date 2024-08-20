import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposCommitsPulls } from "../../../../structures/IApiReposCommitsPulls";
import { pull_minus_request_minus_simple } from "../../../../structures/pull_minus_request_minus_simple";
/**
 * List pull requests associated with a commit.
 * Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, will only return open pull requests associated with the commit.
 *
 * To list the open or merged pull requests associated with a branch, you can set the `commit_sha` parameter to the branch name.
 *
 * @tag repos
 * @path repos/:owner/:repo/commits/:commit_sha/pulls
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndCommit_sha(
  connection: IConnection<getByOwnerAndRepoAndCommit_sha.Headers>,
  owner: string,
  repo: string,
  commit_sha: string,
): Promise<getByOwnerAndRepoAndCommit_sha.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndCommit_sha.simulate(
        connection,
        owner,
        repo,
        commit_sha,
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
          ...getByOwnerAndRepoAndCommit_sha.METADATA,
          path: getByOwnerAndRepoAndCommit_sha.path(owner, repo, commit_sha),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndCommit_sha {
  export type Headers = IApiReposCommitsPulls.GetHeader;
  export type Output = pull_minus_request_minus_simple[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/commits/:commit_sha/pulls",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, commit_sha: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/commits/${encodeURIComponent(commit_sha ?? "null")}/pulls`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): pull_minus_request_minus_simple[] =>
    typia.random<pull_minus_request_minus_simple[]>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndCommit_sha.Headers>,
    owner: string,
    repo: string,
    commit_sha: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndCommit_sha.path(owner, repo, commit_sha),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("commit_sha")(() => typia.assert(commit_sha));
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