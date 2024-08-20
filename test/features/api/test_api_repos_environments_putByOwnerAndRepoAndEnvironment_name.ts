import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { environment } from "@kakasoo/github-sdk/lib/structures/environment";
import typia from "typia";

export async function test_api_repos_environments_putByOwnerAndRepoAndEnvironment_name(
  connection: api.IConnection,
) {
  const output: environment =
    await api.functional.repos.environments.putByOwnerAndRepoAndEnvironment_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
