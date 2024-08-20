import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_orgs_actions_permissions_putByOrg(
  connection: api.IConnection,
) {
  const output = await api.functional.orgs.actions.permissions.putByOrg(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
