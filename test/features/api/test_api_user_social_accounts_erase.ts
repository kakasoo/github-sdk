import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_social_accounts_erase(
  connection: api.IConnection,
) {
  const output = await api.functional.user.social_accounts.erase(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
