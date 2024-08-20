import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiReposPullsReviews } from "../../../../structures/IApiReposPullsReviews";
import { pull_minus_request_minus_review } from "../../../../structures/pull_minus_request_minus_review";
import { body } from "../../../../structures/body";
export * as comments from "./comments";
export * as dismissals from "./dismissals";
export * as events from "./events";
/**
 * List reviews for a pull request.
 * Lists all reviews for a specified pull request. The list of reviews returns in chronological order.
 *
 * This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
 *
 * - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
 * - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.
 * - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.
 * - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
 *
 * @tag pulls
 * @path repos/:owner/:repo/pulls/:pull_number/reviews
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndPull_number(
  connection: IConnection<getByOwnerAndRepoAndPull_number.Headers>,
  owner: string,
  repo: string,
  pull_number: string,
): Promise<getByOwnerAndRepoAndPull_number.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndPull_number.simulate(
        connection,
        owner,
        repo,
        pull_number,
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
          ...getByOwnerAndRepoAndPull_number.METADATA,
          path: getByOwnerAndRepoAndPull_number.path(owner, repo, pull_number),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndPull_number {
  export type Headers = IApiReposPullsReviews.GetHeader;
  export type Output = pull_minus_request_minus_review[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/pulls/:pull_number/reviews",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, pull_number: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/pulls/${encodeURIComponent(pull_number ?? "null")}/reviews`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): pull_minus_request_minus_review[] =>
    typia.random<pull_minus_request_minus_review[]>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndPull_number.Headers>,
    owner: string,
    repo: string,
    pull_number: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndPull_number.path(owner, repo, pull_number),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("pull_number")(() => typia.assert(pull_number));
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
 * Create a review for a pull request.
 * Creates a review on a specified pull request.
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."
 *
 * Pull request reviews created in the `PENDING` state are not submitted and therefore do not include the `submitted_at` property in the response. To create a pending review for a pull request, leave the `event` parameter blank. For more information about submitting a `PENDING` review, see "[Submit a review for a pull request](https://docs.github.com/rest/pulls/reviews#submit-a-review-for-a-pull-request)."
 *
 * > [!NOTE]
 * > To comment on a specific line in a file, you need to first determine the position of that line in the diff. To see a pull request diff, add the `application/vnd.github.v3.diff` media type to the `Accept` header of a call to the [Get a pull request](https://docs.github.com/rest/pulls/pulls#get-a-pull-request) endpoint.
 *
 * The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
 *
 * This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
 *
 * - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
 * - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.
 * - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.
 * - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
 *
 * @tag pulls
 * @path repos/:owner/:repo/pulls/:pull_number/reviews
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepoAndPull_number(
  connection: IConnection<postByOwnerAndRepoAndPull_number.Headers>,
  owner: string,
  repo: string,
  pull_number: string,
  body: postByOwnerAndRepoAndPull_number.Input,
): Promise<postByOwnerAndRepoAndPull_number.Output> {
  return !!connection.simulate
    ? postByOwnerAndRepoAndPull_number.simulate(
        connection,
        owner,
        repo,
        pull_number,
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
          ...postByOwnerAndRepoAndPull_number.METADATA,
          path: postByOwnerAndRepoAndPull_number.path(owner, repo, pull_number),
          status: null,
        },
        body,
      );
}
export namespace postByOwnerAndRepoAndPull_number {
  export type Headers = IApiReposPullsReviews.PostHeader;
  export type Input = body;
  export type Output = pull_minus_request_minus_review;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/pulls/:pull_number/reviews",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, pull_number: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/pulls/${encodeURIComponent(pull_number ?? "null")}/reviews`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): pull_minus_request_minus_review =>
    typia.random<pull_minus_request_minus_review>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepoAndPull_number.Headers>,
    owner: string,
    repo: string,
    pull_number: string,
    body: postByOwnerAndRepoAndPull_number.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepoAndPull_number.path(owner, repo, pull_number),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("pull_number")(() => typia.assert(pull_number));
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
 * Get a review for a pull request.
 * Retrieves a pull request review by its ID.
 *
 * This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
 *
 * - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
 * - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.
 * - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.
 * - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
 *
 * @tag pulls
 * @path repos/:owner/:repo/pulls/:pull_number/reviews/:review_id
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
  export type Headers = IApiReposPullsReviews.GetHeader;
  export type Output = pull_minus_request_minus_review;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id",
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
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/pulls/${encodeURIComponent(pull_number ?? "null")}/reviews/${encodeURIComponent(review_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): pull_minus_request_minus_review =>
    typia.random<pull_minus_request_minus_review>(g);
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
/**
 * Update a review for a pull request.
 * Updates the contents of a specified review summary comment.
 *
 * This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
 *
 * - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
 * - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.
 * - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.
 * - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
 *
 * @tag pulls
 * @path repos/:owner/:repo/pulls/:pull_number/reviews/:review_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function putByOwnerAndRepoAndPull_numberAndReview_id(
  connection: IConnection<putByOwnerAndRepoAndPull_numberAndReview_id.Headers>,
  owner: string,
  repo: string,
  pull_number: string,
  review_id: string,
  body: putByOwnerAndRepoAndPull_numberAndReview_id.Input,
): Promise<putByOwnerAndRepoAndPull_numberAndReview_id.Output> {
  return !!connection.simulate
    ? putByOwnerAndRepoAndPull_numberAndReview_id.simulate(
        connection,
        owner,
        repo,
        pull_number,
        review_id,
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
          ...putByOwnerAndRepoAndPull_numberAndReview_id.METADATA,
          path: putByOwnerAndRepoAndPull_numberAndReview_id.path(
            owner,
            repo,
            pull_number,
            review_id,
          ),
          status: null,
        },
        body,
      );
}
export namespace putByOwnerAndRepoAndPull_numberAndReview_id {
  export type Headers = IApiReposPullsReviews.PutHeader;
  export type Input = body;
  export type Output = pull_minus_request_minus_review;

  export const METADATA = {
    method: "PUT",
    path: "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id",
    request: {
      type: "application/json",
      encrypted: false,
    },
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
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/pulls/${encodeURIComponent(pull_number ?? "null")}/reviews/${encodeURIComponent(review_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): pull_minus_request_minus_review =>
    typia.random<pull_minus_request_minus_review>(g);
  export const simulate = (
    connection: IConnection<putByOwnerAndRepoAndPull_numberAndReview_id.Headers>,
    owner: string,
    repo: string,
    pull_number: string,
    review_id: string,
    body: putByOwnerAndRepoAndPull_numberAndReview_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: putByOwnerAndRepoAndPull_numberAndReview_id.path(
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
 * Delete a pending review for a pull request.
 * Deletes a pull request review that has not been submitted. Submitted reviews cannot be deleted.
 *
 * This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."
 *
 * - **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
 * - **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.
 * - **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.
 * - **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
 *
 * @tag pulls
 * @path repos/:owner/:repo/pulls/:pull_number/reviews/:review_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOwnerAndRepoAndPull_numberAndReview_id(
  connection: IConnection<eraseByOwnerAndRepoAndPull_numberAndReview_id.Headers>,
  owner: string,
  repo: string,
  pull_number: string,
  review_id: string,
): Promise<eraseByOwnerAndRepoAndPull_numberAndReview_id.Output> {
  return !!connection.simulate
    ? eraseByOwnerAndRepoAndPull_numberAndReview_id.simulate(
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
          ...eraseByOwnerAndRepoAndPull_numberAndReview_id.METADATA,
          path: eraseByOwnerAndRepoAndPull_numberAndReview_id.path(
            owner,
            repo,
            pull_number,
            review_id,
          ),
          status: null,
        },
      );
}
export namespace eraseByOwnerAndRepoAndPull_numberAndReview_id {
  export type Headers = IApiReposPullsReviews.DeleteHeader;
  export type Output = pull_minus_request_minus_review;

  export const METADATA = {
    method: "DELETE",
    path: "/repos/:owner/:repo/pulls/:pull_number/reviews/:review_id",
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
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/pulls/${encodeURIComponent(pull_number ?? "null")}/reviews/${encodeURIComponent(review_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): pull_minus_request_minus_review =>
    typia.random<pull_minus_request_minus_review>(g);
  export const simulate = (
    connection: IConnection<eraseByOwnerAndRepoAndPull_numberAndReview_id.Headers>,
    owner: string,
    repo: string,
    pull_number: string,
    review_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOwnerAndRepoAndPull_numberAndReview_id.path(
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
