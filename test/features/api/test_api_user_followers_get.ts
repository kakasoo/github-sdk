import api from "@kakasoo/github-sdk";
import { simple_minus_user } from "@kakasoo/github-sdk/lib/structures/simple_minus_user";
import typia from "typia";

export async function test_api_user_followers_get(connection: api.IConnection) {
  const output: simple_minus_user[] =
    await api.functional.user.followers.get(connection);
  typia.assert(output);
}
