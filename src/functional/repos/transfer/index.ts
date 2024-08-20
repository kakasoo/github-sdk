import { HttpError, IConnection } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import { IApiReposTransfer } from "../../../structures/IApiReposTransfer";
import { body } from "../../../structures/body";

/**
 * Transfer a repository.
 * A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://docs.github.com/articles/about-repository-transfers/).
 *
 * @tag repos
 * @path repos/:owner/:repo/transfer
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function postByOwnerAndRepo(
  connection: IConnection<postByOwnerAndRepo.Headers>,
  owner: string,
  repo: string,
  body: postByOwnerAndRepo.Input,
): Promise<void> {
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
  export type Headers = IApiReposTransfer.PostHeader;
  export type Input = body;

  export const METADATA = {
    method: "POST",
    path: "/repos/:owner/:repo/transfer",
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
    `/repos/${encodeURIComponent(owner ?? "null")}/${encodeURIComponent(repo ?? "null")}/transfer`;
  export const random = (g?: Partial<typia.IRandomGenerator>): void =>
    typia.random<void>(g);
  export const simulate = (
    connection: IConnection<postByOwnerAndRepo.Headers>,
    owner: string,
    repo: string,
    body: postByOwnerAndRepo.Input,
  ): void => {
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
