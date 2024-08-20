import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposBranchesProtection } from "../../../../structures/IApiReposBranchesProtection";
import { branch_minus_protection } from "../../../../structures/branch_minus_protection";
import { body } from "../../../../structures/body";
import { protected_minus_branch } from "../../../../structures/protected_minus_branch";
export * as enforce_admins from "./enforce_admins";
export * as required_pull_request_reviews from "./required_pull_request_reviews";
export * as required_signatures from "./required_signatures";
export * as required_status_checks from "./required_status_checks";
export * as restrictions from "./restrictions";
/**
 * Get branch protection.
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * @tag repos
 * @path repos/:owner/:repo/branches/:branch/protection
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
  export type Headers = IApiReposBranchesProtection.GetHeader;
  export type Output = branch_minus_protection;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/branches/:branch/protection",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, branch: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/branches/${encodeURIComponent(branch ?? "null")}/protection`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): branch_minus_protection => typia.random<branch_minus_protection>(g);
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
 * Update branch protection.
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Protecting a branch requires admin or owner permissions to the repository.
 *
 * > [!NOTE]
 * > Passing new arrays of `users` and `teams` replaces their previous values.
 *
 * > [!NOTE]
 * > The list of users, apps, and teams in total is limited to 100 items.
 *
 * @tag repos
 * @path repos/:owner/:repo/branches/:branch/protection
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOwnerAndRepoAndBranch(
  connection: IConnection<putByOwnerAndRepoAndBranch.Headers>,
  owner: string,
  repo: string,
  branch: string,
  body: putByOwnerAndRepoAndBranch.Input,
): Promise<putByOwnerAndRepoAndBranch.Output> {
  return !!connection.simulate
    ? putByOwnerAndRepoAndBranch.simulate(connection, owner, repo, branch, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...putByOwnerAndRepoAndBranch.METADATA,
          path: putByOwnerAndRepoAndBranch.path(owner, repo, branch),
          status: null,
        },
        body,
      );
}
export namespace putByOwnerAndRepoAndBranch {
  export type Headers = IApiReposBranchesProtection.PutHeader;
  export type Input = body;
  export type Output = protected_minus_branch;

  export const METADATA = {
    method: "PUT",
    path: "/repos/:owner/:repo/branches/:branch/protection",
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
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/branches/${encodeURIComponent(branch ?? "null")}/protection`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): protected_minus_branch => typia.random<protected_minus_branch>(g);
  export const simulate = (
    connection: IConnection<putByOwnerAndRepoAndBranch.Headers>,
    owner: string,
    repo: string,
    branch: string,
    body: putByOwnerAndRepoAndBranch.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByOwnerAndRepoAndBranch.path(owner, repo, branch),
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
 * Delete branch protection.
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * @tag repos
 * @path repos/:owner/:repo/branches/:branch/protection
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
  export type Headers = IApiReposBranchesProtection.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/repos/:owner/:repo/branches/:branch/protection",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, branch: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/branches/${encodeURIComponent(branch ?? "null")}/protection`;
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
