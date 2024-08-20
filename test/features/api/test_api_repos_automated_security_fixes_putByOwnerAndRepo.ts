import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_automated_security_fixes_putByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.automated_security_fixes.putByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
