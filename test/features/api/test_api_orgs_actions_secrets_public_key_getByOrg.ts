import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { actions_minus_public_minus_key } from "@ORGANIZATION/PROJECT-api/lib/structures/actions_minus_public_minus_key";

export async function test_api_orgs_actions_secrets_public_key_getByOrg(
  connection: api.IConnection,
) {
  const output: actions_minus_public_minus_key =
    await api.functional.orgs.actions.secrets.public_key.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
