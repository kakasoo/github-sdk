import api from "@kakasoo/github-sdk";
import { codespace } from "@kakasoo/github-sdk/lib/structures/codespace";
import typia from "typia";

export async function test_api_user_codespaces_start_postByCodespace_name(
  connection: api.IConnection,
) {
  const output: codespace =
    await api.functional.user.codespaces.start.postByCodespace_name(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
