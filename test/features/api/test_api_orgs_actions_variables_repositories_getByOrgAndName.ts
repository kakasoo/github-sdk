import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_orgs_actions_variables_repositories_getByOrgAndName(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.orgs.actions.variables.repositories.getByOrgAndName(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
