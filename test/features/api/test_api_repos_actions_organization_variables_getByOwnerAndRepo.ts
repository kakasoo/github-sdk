import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_repos_actions_organization_variables_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.actions.organization_variables.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
