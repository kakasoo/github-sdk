import api from "@kakasoo/github-sdk";
import { repository } from "@kakasoo/github-sdk/lib/structures/repository";
import typia from "typia";

export async function test_api_user_starred_get(connection: api.IConnection) {
  const output: repository[] =
    await api.functional.user.starred.get(connection);
  typia.assert(output);
}
