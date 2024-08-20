import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

export async function test_api_orgs_actions_variables_repositories_eraseByOrgAndNameAndRepository_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.actions.variables.repositories.eraseByOrgAndNameAndRepository_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
    );
  typia.assert(output);
}
