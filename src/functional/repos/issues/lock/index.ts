import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposIssuesLock } from "../../../../structures/IApiReposIssuesLock";
import { body } from "../../../../structures/body";
/**
 * Lock an issue.
 * Users with push access can lock an issue or pull request's conversation.
 *
 * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method)."
 *
 * @tag issues
 * @path repos/:owner/:repo/issues/:issue_number/lock
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOwnerAndRepoAndIssue_number(
  connection: IConnection<putByOwnerAndRepoAndIssue_number.Headers>,
  owner: string,
  repo: string,
  issue_number: string,
  body: putByOwnerAndRepoAndIssue_number.Input,
): Promise<void> {
  return !!connection.simulate
    ? putByOwnerAndRepoAndIssue_number.simulate(
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
          ...putByOwnerAndRepoAndIssue_number.METADATA,
          path: putByOwnerAndRepoAndIssue_number.path(
            owner,
            repo,
            issue_number,
          ),
          status: null,
        },
        body,
      );
}
export namespace putByOwnerAndRepoAndIssue_number {
  export type Headers = IApiReposIssuesLock.PutHeader;
  export type Input = body;

  export const METADATA = {
    method: "PUT",
    path: "/repos/:owner/:repo/issues/:issue_number/lock",
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
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/issues/${encodeURIComponent(issue_number ?? "null")}/lock`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<putByOwnerAndRepoAndIssue_number.Headers>,
    owner: string,
    repo: string,
    issue_number: string,
    body: putByOwnerAndRepoAndIssue_number.Input,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByOwnerAndRepoAndIssue_number.path(owner, repo, issue_number),
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
 * Unlock an issue.
 * Users with push access can unlock an issue's conversation.
 *
 * @tag issues
 * @path repos/:owner/:repo/issues/:issue_number/lock
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOwnerAndRepoAndIssue_number(
  connection: IConnection<eraseByOwnerAndRepoAndIssue_number.Headers>,
  owner: string,
  repo: string,
  issue_number: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOwnerAndRepoAndIssue_number.simulate(
        connection,
        owner,
        repo,
        issue_number,
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
      );
}
export namespace eraseByOwnerAndRepoAndIssue_number {
  export type Headers = IApiReposIssuesLock.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/repos/:owner/:repo/issues/:issue_number/lock",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, issue_number: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/issues/${encodeURIComponent(issue_number ?? "null")}/lock`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOwnerAndRepoAndIssue_number.Headers>,
    owner: string,
    repo: string,
    issue_number: string,
  ): void => {
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