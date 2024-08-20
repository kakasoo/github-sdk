import api from "@kakasoo/github-sdk";
import { social_minus_account } from "@kakasoo/github-sdk/lib/structures/social_minus_account";
import typia from "typia";

export async function test_api_user_social_accounts_get(
  connection: api.IConnection,
) {
  const output: social_minus_account[] =
    await api.functional.user.social_accounts.get(connection);
  typia.assert(output);
}
