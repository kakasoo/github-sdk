import api from "@kakasoo/github-sdk";
import { simple_minus_user } from "@kakasoo/github-sdk/lib/structures/simple_minus_user";
import typia from "typia";

export async function test_api_users_get(connection: api.IConnection) {
  const output: simple_minus_user[] =
    await api.functional.users.get(connection);
  typia.assert(output);
}
