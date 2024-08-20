import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_actions_variables_eraseByOrgAndName(
  connection: api.IConnection,
) {
  const output = await api.functional.orgs.actions.variables.eraseByOrgAndName(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
