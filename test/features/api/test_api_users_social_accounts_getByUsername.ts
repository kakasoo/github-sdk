import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { social_minus_account } from "@ORGANIZATION/PROJECT-api/lib/structures/social_minus_account";

export async function test_api_users_social_accounts_getByUsername(
  connection: api.IConnection,
) {
  const output: social_minus_account[] =
    await api.functional.users.social_accounts.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
