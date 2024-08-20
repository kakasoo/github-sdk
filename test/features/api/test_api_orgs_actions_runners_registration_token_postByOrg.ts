import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { authentication_minus_token } from "@ORGANIZATION/PROJECT-api/lib/structures/authentication_minus_token";

export async function test_api_orgs_actions_runners_registration_token_postByOrg(
  connection: api.IConnection,
) {
  const output: authentication_minus_token =
    await api.functional.orgs.actions.runners.registration_token.postByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
