import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposCollaboratorsPermission } from "../../../../structures/IApiReposCollaboratorsPermission";
import { repository_minus_collaborator_minus_permission } from "../../../../structures/repository_minus_collaborator_minus_permission";

/**
 * Get repository permissions for a user.
 * Checks the repository permission of a collaborator. The possible repository
 * permissions are `admin`, `write`, `read`, and `none`.
 *
 * *Note*: The `permission` attribute provides the legacy base roles of `admin`, `write`, `read`, and `none`, where the
 * `maintain` role is mapped to `write` and the `triage` role is mapped to `read`. To determine the role assigned to the
 * collaborator, see the `role_name` attribute, which will provide the full role name, including custom roles. The
 * `permissions` hash can also be used to determine which base level of access the collaborator has to the repository.
 *
 * @tag repos
 * @path repos/:owner/:repo/collaborators/:username/permission
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByOwnerAndRepoAndUsername(
  connection: IConnection<getByOwnerAndRepoAndUsername.Headers>,
  owner: string,
  repo: string,
  username: string,
): Promise<getByOwnerAndRepoAndUsername.Output> {
  return !!connection.simulate
    ? getByOwnerAndRepoAndUsername.simulate(connection, owner, repo, username)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByOwnerAndRepoAndUsername.METADATA,
          path: getByOwnerAndRepoAndUsername.path(owner, repo, username),
          status: null,
        },
      );
}
export namespace getByOwnerAndRepoAndUsername {
  export type Headers = IApiReposCollaboratorsPermission.GetHeader;
  export type Output = repository_minus_collaborator_minus_permission;

  export const METADATA = {
    method: "GET",
    path: "/repos/:owner/:repo/collaborators/:username/permission",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (owner: string, repo: string, username: string) =>
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/collaborators/${encodeURIComponent(username ?? "null")}/permission`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): repository_minus_collaborator_minus_permission =>
    typia.random<repository_minus_collaborator_minus_permission>(g);
  export const simulate = (
    connection: IConnection<getByOwnerAndRepoAndUsername.Headers>,
    owner: string,
    repo: string,
    username: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByOwnerAndRepoAndUsername.path(owner, repo, username),
      contentType: "application/json",
    });
    try {
      assert.param("owner")(() => typia.assert(owner));
      assert.param("repo")(() => typia.assert(repo));
      assert.param("username")(() => typia.assert(username));
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
