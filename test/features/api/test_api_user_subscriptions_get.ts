import api from "@kakasoo/github-sdk";
import { minimal_minus_repository } from "@kakasoo/github-sdk/lib/structures/minimal_minus_repository";
import typia from "typia";

export async function test_api_user_subscriptions_get(
  connection: api.IConnection,
) {
  const output: minimal_minus_repository[] =
    await api.functional.user.subscriptions.get(connection);
  typia.assert(output);
}
