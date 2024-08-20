import api from "@kakasoo/github-sdk";
import { social_minus_account } from "@kakasoo/github-sdk/lib/structures/social_minus_account";
import typia from "typia";

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
