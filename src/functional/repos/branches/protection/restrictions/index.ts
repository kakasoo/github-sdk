import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposBranchesProtectionRestrictions } from "../../../../../structures/IApiReposBranchesProtectionRestrictions";
import { branch_minus_restriction_minus_policy } from "../../../../../structures/branch_minus_restriction_minus_policy";
export * as apps from "./apps";
export * as teams from "./teams";
export * as users from "./users";
/**
 * Get access restrictions.
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Lists who has access to this protected branch.
 *
 * > [!NOTE]
 * > Users, apps, and teams `restrictions` are only available for organization-owned repositories.
 *
 * @tag repos
 * @path repos/:owner/:repo/branches/:branch/protection/restrictions
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
  export type Headers = IApiReposBranchesProtectionRestrictions.GetHeader;
  export type Output = branch_minus_restriction_minus_policy;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/branches/:branch/protection/restrictions",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, branch: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/branches/${encodeURIComponent(branch ?? "null")}/protection/restrictions`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): branch_minus_restriction_minus_policy =>
    typia.random<branch_minus_restriction_minus_policy>(g);
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
/**
 * Delete access restrictions.
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Disables the ability to restrict who can push to this branch.
 *
 * @tag repos
 * @path repos/:owner/:repo/branches/:branch/protection/restrictions
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOwnerAndRepoAndBranch(
  connection: IConnection<eraseByOwnerAndRepoAndBranch.Headers>,
  owner: string,
  repo: string,
  branch: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOwnerAndRepoAndBranch.simulate(connection, owner, repo, branch)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...eraseByOwnerAndRepoAndBranch.METADATA,
          path: eraseByOwnerAndRepoAndBranch.path(owner, repo, branch),
          status: null,
        },
      );
}
export namespace eraseByOwnerAndRepoAndBranch {
  export type Headers = IApiReposBranchesProtectionRestrictions.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/repos/:owner/:repo/branches/:branch/protection/restrictions",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, branch: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/branches/${encodeURIComponent(branch ?? "null")}/protection/restrictions`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOwnerAndRepoAndBranch.Headers>,
    owner: string,
    repo: string,
    branch: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOwnerAndRepoAndBranch.path(owner, repo, branch),
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
