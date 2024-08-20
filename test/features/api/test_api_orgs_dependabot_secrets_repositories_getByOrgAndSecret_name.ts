import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_orgs_dependabot_secrets_repositories_getByOrgAndSecret_name(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.orgs.dependabot.secrets.repositories.getByOrgAndSecret_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
