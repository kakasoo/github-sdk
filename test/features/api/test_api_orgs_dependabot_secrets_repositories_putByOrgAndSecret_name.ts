import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_orgs_dependabot_secrets_repositories_putByOrgAndSecret_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.dependabot.secrets.repositories.putByOrgAndSecret_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
