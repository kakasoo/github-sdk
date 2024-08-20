import api from "@kakasoo/github-sdk";
import { environment } from "@kakasoo/github-sdk/lib/structures/environment";
import typia from "typia";

export async function test_api_repos_environments_getByOwnerAndRepoAndEnvironment_name(
  connection: api.IConnection,
) {
  const output: environment =
    await api.functional.repos.environments.getByOwnerAndRepoAndEnvironment_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
