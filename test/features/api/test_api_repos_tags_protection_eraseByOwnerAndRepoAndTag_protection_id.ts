import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_tags_protection_eraseByOwnerAndRepoAndTag_protection_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.tags.protection.eraseByOwnerAndRepoAndTag_protection_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
