import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposBranchesProtectionRequiredStatusChecksContexts } from "../../../../../../structures/IApiReposBranchesProtectionRequiredStatusChecksContexts";
import { body } from "../../../../../../structures/body";
/**
 * Get all status check contexts.
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * @tag repos
 * @path repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
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
    IApiReposBranchesProtectionRequiredStatusChecksContexts.GetHeader;
  export type Output = string[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, branch: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/branches/${encodeURIComponent(branch ?? "null")}/protection/required_status_checks/contexts`;
  export const random = (g?: Partial<typia.IRandomGenerator>): string[] =>
    typia.random<string[]>(g);
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
 * Add status check contexts.
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * @tag repos
 * @path repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepoAndBranch(
  connection: IConnection<postByOwnerAndRepoAndBranch.Headers>,
  owner: string,
  repo: string,
  branch: string,
  body: postByOwnerAndRepoAndBranch.Input,
): Promise<postByOwnerAndRepoAndBranch.Output> {
  return !!connection.simulate
    ? postByOwnerAndRepoAndBranch.simulate(
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
          ...postByOwnerAndRepoAndBranch.METADATA,
          path: postByOwnerAndRepoAndBranch.path(owner, repo, branch),
          status: null,
        },
        body,
      );
}
export namespace postByOwnerAndRepoAndBranch {
  export type Headers =
    IApiReposBranchesProtectionRequiredStatusChecksContexts.PostHeader;
  export type Input = body;
  export type Output = string[];

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
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
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/branches/${encodeURIComponent(branch ?? "null")}/protection/required_status_checks/contexts`;
  export const random = (g?: Partial<typia.IRandomGenerator>): string[] =>
    typia.random<string[]>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepoAndBranch.Headers>,
    owner: string,
    repo: string,
    branch: string,
    body: postByOwnerAndRepoAndBranch.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepoAndBranch.path(owner, repo, branch),
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
 * Set status check contexts.
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * @tag repos
 * @path repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
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
  export type Headers =
    IApiReposBranchesProtectionRequiredStatusChecksContexts.PutHeader;
  export type Input = body;
  export type Output = string[];

  export const METADATA = {
    method: "PUT",
    path: "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
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
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/branches/${encodeURIComponent(branch ?? "null")}/protection/required_status_checks/contexts`;
  export const random = (g?: Partial<typia.IRandomGenerator>): string[] =>
    typia.random<string[]>(g);
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
 * Remove status check contexts.
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * @tag repos
 * @path repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOwnerAndRepoAndBranch(
  connection: IConnection<eraseByOwnerAndRepoAndBranch.Headers>,
  owner: string,
  repo: string,
  branch: string,
  body: eraseByOwnerAndRepoAndBranch.Input,
): Promise<eraseByOwnerAndRepoAndBranch.Output> {
  return !!connection.simulate
    ? eraseByOwnerAndRepoAndBranch.simulate(
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
          ...eraseByOwnerAndRepoAndBranch.METADATA,
          path: eraseByOwnerAndRepoAndBranch.path(owner, repo, branch),
          status: null,
        },
        body,
      );
}
export namespace eraseByOwnerAndRepoAndBranch {
  export type Headers =
    IApiReposBranchesProtectionRequiredStatusChecksContexts.DeleteHeader;
  export type Input = body;
  export type Output = string[];

  export const METADATA = {
    method: "DELETE",
    path: "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
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
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/branches/${encodeURIComponent(branch ?? "null")}/protection/required_status_checks/contexts`;
  export const random = (g?: Partial<typia.IRandomGenerator>): string[] =>
    typia.random<string[]>(g);
  export const simulate = (
    connection: IConnection<eraseByOwnerAndRepoAndBranch.Headers>,
    owner: string,
    repo: string,
    branch: string,
    body: eraseByOwnerAndRepoAndBranch.Input,
  ): Output => {
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
