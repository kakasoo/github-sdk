import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { dependabot_minus_public_minus_key } from "@ORGANIZATION/PROJECT-api/lib/structures/dependabot_minus_public_minus_key";

export async function test_api_repos_dependabot_secrets_public_key_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: dependabot_minus_public_minus_key =
    await api.functional.repos.dependabot.secrets.public_key.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
