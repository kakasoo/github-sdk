import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposBranchesProtectionRequiredPullRequestReviews } from "../../../../../structures/IApiReposBranchesProtectionRequiredPullRequestReviews";
import { protected_minus_branch_minus_pull_minus_request_minus_review } from "../../../../../structures/protected_minus_branch_minus_pull_minus_request_minus_review";
import { body } from "../../../../../structures/body";
/**
 * Get pull request review protection.
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * @tag repos
 * @path repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews
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
  export type Headers =
    IApiReposBranchesProtectionRequiredPullRequestReviews.GetHeader;
  export type Output =
    protected_minus_branch_minus_pull_minus_request_minus_review;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, branch: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/branches/${encodeURIComponent(branch ?? "null")}/protection/required_pull_request_reviews`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): protected_minus_branch_minus_pull_minus_request_minus_review =>
    typia.random<protected_minus_branch_minus_pull_minus_request_minus_review>(
      g,
    );
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
 * Update pull request review protection.
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
 *
 * > [!NOTE]
 * > Passing new arrays of `users` and `teams` replaces their previous values.
 *
 * @tag repos
 * @path repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function patchByOwnerAndRepoAndBranch(
  connection: IConnection<patchByOwnerAndRepoAndBranch.Headers>,
  owner: string,
  repo: string,
  branch: string,
  body: patchByOwnerAndRepoAndBranch.Input,
): Promise<patchByOwnerAndRepoAndBranch.Output> {
  return !!connection.simulate
    ? patchByOwnerAndRepoAndBranch.simulate(
        connection,
        owner,
        repo,
        branch,
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
          ...patchByOwnerAndRepoAndBranch.METADATA,
          path: patchByOwnerAndRepoAndBranch.path(owner, repo, branch),
          status: null,
        },
        body,
      );
}
export namespace patchByOwnerAndRepoAndBranch {
  export type Headers =
    IApiReposBranchesProtectionRequiredPullRequestReviews.PatchHeader;
  export type Input = body;
  export type Output =
    protected_minus_branch_minus_pull_minus_request_minus_review;

  export const METADATA = {
    method: "PATCH",
    path: "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, branch: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/branches/${encodeURIComponent(branch ?? "null")}/protection/required_pull_request_reviews`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): protected_minus_branch_minus_pull_minus_request_minus_review =>
    typia.random<protected_minus_branch_minus_pull_minus_request_minus_review>(
      g,
    );
  export const simulate = (
    connection: IConnection<patchByOwnerAndRepoAndBranch.Headers>,
    owner: string,
    repo: string,
    branch: string,
    body: patchByOwnerAndRepoAndBranch.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: patchByOwnerAndRepoAndBranch.path(owner, repo, branch),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("branch")(() => typia.assert(branch));
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
 * Delete pull request review protection.
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * @tag repos
 * @path repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews
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
  export type Headers =
    IApiReposBranchesProtectionRequiredPullRequestReviews.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, branch: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/branches/${encodeURIComponent(branch ?? "null")}/protection/required_pull_request_reviews`;
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