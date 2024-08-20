import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposActionsArtifacts } from "../../../../structures/IApiReposActionsArtifacts";
import { artifact } from "../../../../structures/artifact";
import { response } from "../../../../structures/response";

/**
 * List artifacts for a repository.
 * Lists all artifacts for a repository.
 *
 * Anyone with read access to the repository can use this endpoint.
 *
 * OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/artifacts
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
  export type Headers = IApiReposActionsArtifacts.GetHeader;
  export type Output = response;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/actions/artifacts",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/artifacts`;
  export const random = (g?: Partial<typia.IRandomGenerator>): response =>
    typia.random<response>(g);
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
 * Get an artifact.
 * Gets a specific artifact for a workflow run.
 *
 * Anyone with read access to the repository can use this endpoint.
 *
 * If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/artifacts/:artifact_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndArtifact_id(
  connection: IConnection<getByOwnerAndRepoAndArtifact_id.Headers>,
  owner: string,
  repo: string,
  artifact_id: string,
): Promise<getByOwnerAndRepoAndArtifact_id.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndArtifact_id.simulate(
        connection,
        owner,
        repo,
        artifact_id,
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
          ...getByOwnerAndRepoAndArtifact_id.METADATA,
          path: getByOwnerAndRepoAndArtifact_id.path(owner, repo, artifact_id),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndArtifact_id {
  export type Headers = IApiReposActionsArtifacts.GetHeader;
  export type Output = artifact;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/actions/artifacts/:artifact_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, artifact_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/artifacts/${encodeURIComponent(artifact_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): artifact =>
    typia.random<artifact>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndArtifact_id.Headers>,
    owner: string,
    repo: string,
    artifact_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndArtifact_id.path(owner, repo, artifact_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("artifact_id")(() => typia.assert(artifact_id));
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
 * Delete an artifact.
 * Deletes an artifact for a workflow run.
 * OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/artifacts/:artifact_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function eraseByOwnerAndRepoAndArtifact_id(
  connection: IConnection<eraseByOwnerAndRepoAndArtifact_id.Headers>,
  owner: string,
  repo: string,
  artifact_id: string,
): Promise<void> {
  return !!connection.simulate
    ? eraseByOwnerAndRepoAndArtifact_id.simulate(
        connection,
        owner,
        repo,
        artifact_id,
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
          ...eraseByOwnerAndRepoAndArtifact_id.METADATA,
          path: eraseByOwnerAndRepoAndArtifact_id.path(
            owner,
            repo,
            artifact_id,
          ),
          status: null,
        },
      );
}
export namespace eraseByOwnerAndRepoAndArtifact_id {
  export type Headers = IApiReposActionsArtifacts.DeleteHeader;

  export const METADATA = {
    method: "DELETE",
    path: "/repos/:owner/:repo/actions/artifacts/:artifact_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, artifact_id: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/artifacts/${encodeURIComponent(artifact_id ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<eraseByOwnerAndRepoAndArtifact_id.Headers>,
    owner: string,
    repo: string,
    artifact_id: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: eraseByOwnerAndRepoAndArtifact_id.path(owner, repo, artifact_id),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("artifact_id")(() => typia.assert(artifact_id));
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
 * Download an artifact.
 * Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
 * the response header to find the URL for the download. The `:archive_format` must be `zip`.
 *
 * OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
 *
 * @tag actions
 * @path repos/:owner/:repo/actions/artifacts/:artifact_id/:archive_format
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndArtifact_idAndArchive_format(
  connection: IConnection<getByOwnerAndRepoAndArtifact_idAndArchive_format.Headers>,
  owner: string,
  repo: string,
  artifact_id: string,
  archive_format: string,
): Promise<void> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndArtifact_idAndArchive_format.simulate(
        connection,
        owner,
        repo,
        artifact_id,
        archive_format,
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
          ...getByOwnerAndRepoAndArtifact_idAndArchive_format.METADATA,
          path: getByOwnerAndRepoAndArtifact_idAndArchive_format.path(
            owner,
            repo,
            artifact_id,
            archive_format,
          ),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndArtifact_idAndArchive_format {
  export type Headers = IApiReposActionsArtifacts.GetHeader;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/actions/artifacts/:artifact_id/:archive_format",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (
    owner: string,
    repo: string,
    artifact_id: string,
    archive_format: string,
  ) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/actions/artifacts/${encodeURIComponent(artifact_id ?? "null")}/${encodeURIComponent(archive_format ?? "null")}`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndArtifact_idAndArchive_format.Headers>,
    owner: string,
    repo: string,
    artifact_id: string,
    archive_format: string,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndArtifact_idAndArchive_format.path(
        owner,
        repo,
        artifact_id,
        archive_format,
      ),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("artifact_id")(() => typia.assert(artifact_id));
      assert.param("archive_format")(() => typia.assert(archive_format));
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
