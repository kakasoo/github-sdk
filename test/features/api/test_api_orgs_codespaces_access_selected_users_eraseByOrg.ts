import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_orgs_codespaces_access_selected_users_eraseByOrg(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.codespaces.access.selected_users.eraseByOrg(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
