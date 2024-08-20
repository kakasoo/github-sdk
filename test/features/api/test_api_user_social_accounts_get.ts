import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { social_minus_account } from "@ORGANIZATION/PROJECT-api/lib/structures/social_minus_account";

export async function test_api_user_social_accounts_get(
  connection: api.IConnection,
) {
  const output: social_minus_account[] =
    await api.functional.user.social_accounts.get(connection);
  typia.assert(output);
}
