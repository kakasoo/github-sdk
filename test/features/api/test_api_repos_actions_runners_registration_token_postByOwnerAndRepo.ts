import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { authentication_minus_token } from "@ORGANIZATION/PROJECT-api/lib/structures/authentication_minus_token";

export async function test_api_repos_actions_runners_registration_token_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: authentication_minus_token =
    await api.functional.repos.actions.runners.registration_token.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
