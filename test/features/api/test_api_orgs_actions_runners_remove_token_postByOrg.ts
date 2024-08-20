import api from "@kakasoo/github-sdk";
import { authentication_minus_token } from "@kakasoo/github-sdk/lib/structures/authentication_minus_token";
import typia from "typia";

export async function test_api_orgs_actions_runners_remove_token_postByOrg(
  connection: api.IConnection,
) {
  const output: authentication_minus_token =
    await api.functional.orgs.actions.runners.remove_token.postByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
