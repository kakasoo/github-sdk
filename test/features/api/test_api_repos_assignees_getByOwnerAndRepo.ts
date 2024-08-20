import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { simple_minus_user } from "@ORGANIZATION/PROJECT-api/lib/structures/simple_minus_user";

export async function test_api_repos_assignees_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] =
    await api.functional.repos.assignees.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
