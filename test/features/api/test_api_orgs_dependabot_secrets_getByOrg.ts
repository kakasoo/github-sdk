import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_orgs_dependabot_secrets_getByOrg(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.orgs.dependabot.secrets.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
