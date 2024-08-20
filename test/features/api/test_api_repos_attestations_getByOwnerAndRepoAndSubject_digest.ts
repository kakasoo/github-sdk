import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_repos_attestations_getByOwnerAndRepoAndSubject_digest(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.attestations.getByOwnerAndRepoAndSubject_digest(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
