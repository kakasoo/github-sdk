import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_orgs_actions_permissions_repositories_getByOrg(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.orgs.actions.permissions.repositories.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
