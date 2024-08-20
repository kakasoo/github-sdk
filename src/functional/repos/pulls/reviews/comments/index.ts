import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposPullsReviewsComments } from "../../../../../structures/IApiReposPullsReviewsComments";
import { review_minus_comment } from "../../../../../structures/review_minus_comment";

/**
 * List comments for a pull request review.
 * Lists comments for a specific pull request review.
 *
 * This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
 *
 * - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
 * - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.
 * - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.
 * - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
 *
 * @tag pulls
 * @path repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndPull_numberAndReview_id(
  connection: IConnection<getByOwnerAndRepoAndPull_numberAndReview_id.Headers>,
  owner: string,
  repo: string,
  pull_number: string,
  review_id: string,
): Promise<getByOwnerAndRepoAndPull_numberAndReview_id.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndPull_numberAndReview_id.simulate(
        connection,
        owner,
        repo,
        pull_number,
        review_id,
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
          ...getByOwnerAndRepoAndPull_numberAndReview_id.METADATA,
          path: getByOwnerAndRepoAndPull_numberAndReview_id.path(
            owner,
            repo,
            pull_number,
            review_id,
          ),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndPull_numberAndReview_id {
  export type Headers = IApiReposPullsReviewsComments.GetHeader;
  export type Output = review_minus_comment[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    owner: string,
    repo: string,
    pull_number: string,
    review_id: string,
  ) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/pulls/${encodeURIComponent(pull_number ?? "null")}/reviews/${encodeURIComponent(review_id ?? "null")}/comments`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): review_minus_comment[] => typia.random<review_minus_comment[]>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndPull_numberAndReview_id.Headers>,
    owner: string,
    repo: string,
    pull_number: string,
    review_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndPull_numberAndReview_id.path(
        owner,
        repo,
        pull_number,
        review_id,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("pull_number")(() => typia.assert(pull_number));
      assert.param("review_id")(() => typia.assert(review_id));
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
