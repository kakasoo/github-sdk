import api from "@kakasoo/github-sdk";
import typia, { tags } from "typia";

export async function test_api_orgs_actions_variables_repositories_putByOrgAndNameAndRepository_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.actions.variables.repositories.putByOrgAndNameAndRepository_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
    );
  typia.assert(output);
}
