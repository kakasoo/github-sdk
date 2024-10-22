import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_dependabot_secrets_eraseByOrgAndSecret_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.dependabot.secrets.eraseByOrgAndSecret_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
