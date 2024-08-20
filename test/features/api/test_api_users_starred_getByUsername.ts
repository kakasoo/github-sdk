import api from "@kakasoo/github-sdk";
import { repository } from "@kakasoo/github-sdk/lib/structures/repository";
import { starred_minus_repository } from "@kakasoo/github-sdk/lib/structures/starred_minus_repository";
import typia from "typia";

export async function test_api_users_starred_getByUsername(
  connection: api.IConnection,
) {
  const output: starred_minus_repository[] | repository[] =
    await api.functional.users.starred.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
