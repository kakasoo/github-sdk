import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { actions_minus_public_minus_key } from "@ORGANIZATION/PROJECT-api/lib/structures/actions_minus_public_minus_key";

export async function test_api_repos_actions_secrets_public_key_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: actions_minus_public_minus_key =
    await api.functional.repos.actions.secrets.public_key.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
