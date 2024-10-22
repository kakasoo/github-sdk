import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_repos_actions_variables_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.actions.variables.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
