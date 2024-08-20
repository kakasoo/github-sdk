import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposIssuesAssignees } from "../../../../structures/IApiReposIssuesAssignees";
import { body } from "../../../../structures/body";
import { issue } from "../../../../structures/issue";

/**
 * Add assignees to an issue.
 * Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.
 *
 * @tag issues
 * @path repos/:owner/:repo/issues/:issue_number/assignees
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepoAndIssue_number(
  connection: IConnection<postByOwnerAndRepoAndIssue_number.Headers>,
  owner: string,
  repo: string,
  issue_number: string,
  body: postByOwnerAndRepoAndIssue_number.Input,
): Promise<postByOwnerAndRepoAndIssue_number.Output> {
  return !!connection.simulate
    ? postByOwnerAndRepoAndIssue_number.simulate(
        connection,
        owner,
        repo,
        issue_number,
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
          ...postByOwnerAndRepoAndIssue_number.METADATA,
          path: postByOwnerAndRepoAndIssue_number.path(
            owner,
            repo,
            issue_number,
          ),
          status: null,
        },
        body,
      );
}
export namespace postByOwnerAndRepoAndIssue_number {
  export type Headers = IApiReposIssuesAssignees.PostHeader;
  export type Input = body;
  export type Output = issue;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/issues/:issue_number/assignees",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, issue_number: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/issues/${encodeURIComponent(issue_number ?? "null")}/assignees`;
  export const random = (g?: Partial<typia.IRandomGenerator>): issue =>
    typia.random<issue>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepoAndIssue_number.Headers>,
    owner: string,
    repo: string,
    issue_number: string,
    body: postByOwnerAndRepoAndIssue_number.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepoAndIssue_number.path(owner, repo, issue_number),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("issue_number")(() => typia.assert(issue_number));
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
 * Remove assignees from an issue.
 * Removes one or more assignees from an issue.
 *
 * @tag issues
 * @path repos/:owner/:repo/issues/:issue_number/assignees
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOwnerAndRepoAndIssue_number(
  connection: IConnection<eraseByOwnerAndRepoAndIssue_number.Headers>,
  owner: string,
  repo: string,
  issue_number: string,
  body: eraseByOwnerAndRepoAndIssue_number.Input,
): Promise<eraseByOwnerAndRepoAndIssue_number.Output> {
  return !!connection.simulate
    ? eraseByOwnerAndRepoAndIssue_number.simulate(
        connection,
        owner,
        repo,
        issue_number,
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
          ...eraseByOwnerAndRepoAndIssue_number.METADATA,
          path: eraseByOwnerAndRepoAndIssue_number.path(
            owner,
            repo,
            issue_number,
          ),
          status: null,
        },
        body,
      );
}
export namespace eraseByOwnerAndRepoAndIssue_number {
  export type Headers = IApiReposIssuesAssignees.DeleteHeader;
  export type Input = body;
  export type Output = issue;

  export const METADATA = {
    method: "DELETE",
    path: "/repos/:owner/:repo/issues/:issue_number/assignees",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, issue_number: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/issues/${encodeURIComponent(issue_number ?? "null")}/assignees`;
  export const random = (g?: Partial<typia.IRandomGenerator>): issue =>
    typia.random<issue>(g);
  export const simulate = (
    connection: IConnection<eraseByOwnerAndRepoAndIssue_number.Headers>,
    owner: string,
    repo: string,
    issue_number: string,
    body: eraseByOwnerAndRepoAndIssue_number.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOwnerAndRepoAndIssue_number.path(owner, repo, issue_number),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("issue_number")(() => typia.assert(issue_number));
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
 * Check if a user can be assigned to a issue.
 * Checks if a user has permission to be assigned to a specific issue.
 *
 * If the `assignee` can be assigned to this issue, a `204` status code with no content is returned.
 *
 * Otherwise a `404` status code is returned.
 *
 * @tag issues
 * @path repos/:owner/:repo/issues/:issue_number/assignees/:assignee
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndIssue_numberAndAssignee(
  connection: IConnection<getByOwnerAndRepoAndIssue_numberAndAssignee.Headers>,
  owner: string,
  repo: string,
  issue_number: string,
  assignee: string,
): Promise<void> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndIssue_numberAndAssignee.simulate(
        connection,
        owner,
        repo,
        issue_number,
        assignee,
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
          ...getByOwnerAndRepoAndIssue_numberAndAssignee.METADATA,
          path: getByOwnerAndRepoAndIssue_numberAndAssignee.path(
            owner,
            repo,
            issue_number,
            assignee,
          ),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndIssue_numberAndAssignee {
  export type Headers = IApiReposIssuesAssignees.GetHeader;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/issues/:issue_number/assignees/:assignee",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    owner: string,
    repo: string,
    issue_number: string,
    assignee: string,
  ) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/issues/${encodeURIComponent(issue_number ?? "null")}/assignees/${encodeURIComponent(assignee ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndIssue_numberAndAssignee.Headers>,
    owner: string,
    repo: string,
    issue_number: string,
    assignee: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndIssue_numberAndAssignee.path(
        owner,
        repo,
        issue_number,
        assignee,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("issue_number")(() => typia.assert(issue_number));
      assert.param("assignee")(() => typia.assert(assignee));
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
