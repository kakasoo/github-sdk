import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_hooks_tests_postByOwnerAndRepoAndHook_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.hooks.tests.postByOwnerAndRepoAndHook_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
