import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_user_social_accounts_erase(
  connection: api.IConnection,
) {
  const output = await api.functional.user.social_accounts.erase(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
