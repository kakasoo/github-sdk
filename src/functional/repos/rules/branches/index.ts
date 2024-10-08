import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposRulesBranches } from "../../../../structures/IApiReposRulesBranches";
import { repository_minus_rule_minus_detailed } from "../../../../structures/repository_minus_rule_minus_detailed";

/**
 * Get rules for a branch.
 * Returns all active rules that apply to the specified branch. The branch does not need to exist; rules that would apply
 * to a branch with that name will be returned. All active rules that apply will be returned, regardless of the level
 * at which they are configured (e.g. repository or organization). Rules in rulesets with "evaluate" or "disabled"
 * enforcement statuses are not returned.
 *
 * @tag repos
 * @path repos/:owner/:repo/rules/branches/:branch
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndBranch(
  connection: IConnection<getByOwnerAndRepoAndBranch.Headers>,
  owner: string,
  repo: string,
  branch: string,
): Promise<getByOwnerAndRepoAndBranch.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndBranch.simulate(connection, owner, repo, branch)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOwnerAndRepoAndBranch.METADATA,
          path: getByOwnerAndRepoAndBranch.path(owner, repo, branch),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndBranch {
  export type Headers = IApiReposRulesBranches.GetHeader;
  export type Output = repository_minus_rule_minus_detailed[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/rules/branches/:branch",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, branch: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/rules/branches/${encodeURIComponent(branch ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): repository_minus_rule_minus_detailed[] =>
    typia.random<repository_minus_rule_minus_detailed[]>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndBranch.Headers>,
    owner: string,
    repo: string,
    branch: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndBranch.path(owner, repo, branch),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("branch")(() => typia.assert(branch));
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
