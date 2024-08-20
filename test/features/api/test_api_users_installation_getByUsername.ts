import api from "@kakasoo/github-sdk";
import { installation } from "@kakasoo/github-sdk/lib/structures/installation";
import typia from "typia";

export async function test_api_users_installation_getByUsername(
  connection: api.IConnection,
) {
  const output: installation =
    await api.functional.users.installation.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
