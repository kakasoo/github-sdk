import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposReleases } from "../../../structures/IApiReposReleases";
import { body } from "../../../structures/body";
import { release } from "../../../structures/release";

export * as assets from "./assets";
export * as generate_notes from "./generate_notes";
export * as latest from "./latest";
export * as tags from "./tags";
export * as reactions from "./reactions";
/**
 * List releases.
 * This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/rest/repos/repos#list-repository-tags).
 *
 * Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.
 *
 * @tag repos
 * @path repos/:owner/:repo/releases
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepo(
  connection: IConnection<getByOwnerAndRepo.Headers>,
  owner: string,
  repo: string,
): Promise<getByOwnerAndRepo.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepo.simulate(connection, owner, repo)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOwnerAndRepo.METADATA,
          path: getByOwnerAndRepo.path(owner, repo),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepo {
  export type Headers = IApiReposReleases.GetHeader;
  export type Output = release[];

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/releases",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/releases`;
  export const random = (g?: Partial<typia.IRandomGenerator>): release[] =>
    typia.random<release[]>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepo.Headers>,
    owner: string,
    repo: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepo.path(owner, repo),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
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
 * Create a release.
 * Users with push access to the repository can create a release.
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."
 *
 * @tag repos
 * @path repos/:owner/:repo/releases
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepo(
  connection: IConnection<postByOwnerAndRepo.Headers>,
  owner: string,
  repo: string,
  body: postByOwnerAndRepo.Input,
): Promise<postByOwnerAndRepo.Output> {
  return !!connection.simulate
    ? postByOwnerAndRepo.simulate(connection, owner, repo, body)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...postByOwnerAndRepo.METADATA,
          path: postByOwnerAndRepo.path(owner, repo),
          status: null,
        },
        body,
      );
}
export namespace postByOwnerAndRepo {
  export type Headers = IApiReposReleases.PostHeader;
  export type Input = body;
  export type Output = release;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/releases",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/releases`;
  export const random = (g?: Partial<typia.IRandomGenerator>): release =>
    typia.random<release>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepo.Headers>,
    owner: string,
    repo: string,
    body: postByOwnerAndRepo.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: postByOwnerAndRepo.path(owner, repo),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
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
 * Get a release.
 * Gets a public release with the specified release ID.
 *
 * > [!NOTE]
 * > This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a hypermedia resource. For more information, see "[Getting started with the REST API](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#hypermedia)."
 *
 * @tag repos
 * @path repos/:owner/:repo/releases/:release_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndRelease_id(
  connection: IConnection<getByOwnerAndRepoAndRelease_id.Headers>,
  owner: string,
  repo: string,
  release_id: string,
): Promise<getByOwnerAndRepoAndRelease_id.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndRelease_id.simulate(
        connection,
        owner,
        repo,
        release_id,
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
          ...getByOwnerAndRepoAndRelease_id.METADATA,
          path: getByOwnerAndRepoAndRelease_id.path(owner, repo, release_id),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndRelease_id {
  export type Headers = IApiReposReleases.GetHeader;
  export type Output = release;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/releases/:release_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, release_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/releases/${encodeURIComponent(release_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): release =>
    typia.random<release>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndRelease_id.Headers>,
    owner: string,
    repo: string,
    release_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndRelease_id.path(owner, repo, release_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("release_id")(() => typia.assert(release_id));
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
 * Update a release.
 * Users with push access to the repository can edit a release.
 *
 * @tag repos
 * @path repos/:owner/:repo/releases/:release_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function patchByOwnerAndRepoAndRelease_id(
  connection: IConnection<patchByOwnerAndRepoAndRelease_id.Headers>,
  owner: string,
  repo: string,
  release_id: string,
  body: patchByOwnerAndRepoAndRelease_id.Input,
): Promise<patchByOwnerAndRepoAndRelease_id.Output> {
  return !!connection.simulate
    ? patchByOwnerAndRepoAndRelease_id.simulate(
        connection,
        owner,
        repo,
        release_id,
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
          ...patchByOwnerAndRepoAndRelease_id.METADATA,
          path: patchByOwnerAndRepoAndRelease_id.path(owner, repo, release_id),
          status: null,
        },
        body,
      );
}
export namespace patchByOwnerAndRepoAndRelease_id {
  export type Headers = IApiReposReleases.PatchHeader;
  export type Input = body;
  export type Output = release;

  export const METADATA = {
    method: "PATCH",
    path: "/repos/:owner/:repo/releases/:release_id",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, release_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/releases/${encodeURIComponent(release_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): release =>
    typia.random<release>(g);
  export const simulate = (
    connection: IConnection<patchByOwnerAndRepoAndRelease_id.Headers>,
    owner: string,
    repo: string,
    release_id: string,
    body: patchByOwnerAndRepoAndRelease_id.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: patchByOwnerAndRepoAndRelease_id.path(owner, repo, release_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("release_id")(() => typia.assert(release_id));
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
 * Delete a release.
 * Users with push access to the repository can delete a release.
 *
 * @tag repos
 * @path repos/:owner/:repo/releases/:release_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOwnerAndRepoAndRelease_id(
  connection: IConnection<eraseByOwnerAndRepoAndRelease_id.Headers>,
  owner: string,
  repo: string,
  release_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOwnerAndRepoAndRelease_id.simulate(
        connection,
        owner,
        repo,
        release_id,
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
          ...eraseByOwnerAndRepoAndRelease_id.METADATA,
          path: eraseByOwnerAndRepoAndRelease_id.path(owner, repo, release_id),
          status: null,
        },
      );
}
export namespace eraseByOwnerAndRepoAndRelease_id {
  export type Headers = IApiReposReleases.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/repos/:owner/:repo/releases/:release_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, release_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/releases/${encodeURIComponent(release_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOwnerAndRepoAndRelease_id.Headers>,
    owner: string,
    repo: string,
    release_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOwnerAndRepoAndRelease_id.path(owner, repo, release_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("release_id")(() => typia.assert(release_id));
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
