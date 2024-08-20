import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposCommitsComments } from "../../../../structures/IApiReposCommitsComments";
import { commit_minus_comment } from "../../../../structures/commit_minus_comment";
import { body } from "../../../../structures/body";
/**
 * List commit comments.
 * Lists the comments for a specified commit.
 *
 * This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
 *
 * - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
 * - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.
 * - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.
 * - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
 *
 * @tag repos
 * @path repos/:owner/:repo/commits/:commit_sha/comments
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
  export type Headers = IApiReposCommitsComments.GetHeader;
  export type Output = commit_minus_comment[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/commits/:commit_sha/comments",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, commit_sha: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/commits/${encodeURIComponent(commit_sha ?? "null")}/comments`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): commit_minus_comment[] => typia.random<commit_minus_comment[]>(g);
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
/**
 * Create a commit comment.
 * Create a comment for a commit using its `:commit_sha`.
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."
 *
 * This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
 *
 * - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
 * - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.
 * - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.
 * - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
 *
 * @tag repos
 * @path repos/:owner/:repo/commits/:commit_sha/comments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepoAndCommit_sha(
  connection: IConnection<postByOwnerAndRepoAndCommit_sha.Headers>,
  owner: string,
  repo: string,
  commit_sha: string,
  body: postByOwnerAndRepoAndCommit_sha.Input,
): Promise<postByOwnerAndRepoAndCommit_sha.Output> {
  return !!connection.simulate
    ? postByOwnerAndRepoAndCommit_sha.simulate(
        connection,
        owner,
        repo,
        commit_sha,
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
          ...postByOwnerAndRepoAndCommit_sha.METADATA,
          path: postByOwnerAndRepoAndCommit_sha.path(owner, repo, commit_sha),
          status: null,
        },
        body,
      );
}
export namespace postByOwnerAndRepoAndCommit_sha {
  export type Headers = IApiReposCommitsComments.PostHeader;
  export type Input = body;
  export type Output = commit_minus_comment;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/commits/:commit_sha/comments",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, commit_sha: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/commits/${encodeURIComponent(commit_sha ?? "null")}/comments`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): commit_minus_comment => typia.random<commit_minus_comment>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepoAndCommit_sha.Headers>,
    owner: string,
    repo: string,
    commit_sha: string,
    body: postByOwnerAndRepoAndCommit_sha.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepoAndCommit_sha.path(owner, repo, commit_sha),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("commit_sha")(() => typia.assert(commit_sha));
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
