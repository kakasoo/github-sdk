import api from "@kakasoo/github-sdk";
import { full_minus_repository } from "@kakasoo/github-sdk/lib/structures/full_minus_repository";
import typia from "typia";

export async function test_api_repos_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: full_minus_repository =
    await api.functional.repos.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
