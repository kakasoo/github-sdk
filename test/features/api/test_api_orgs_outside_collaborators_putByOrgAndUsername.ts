import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_orgs_outside_collaborators_putByOrgAndUsername(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.outside_collaborators.putByOrgAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
