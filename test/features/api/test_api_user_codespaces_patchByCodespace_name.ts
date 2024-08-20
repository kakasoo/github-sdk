import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { codespace } from "@kakasoo/github-sdk/lib/structures/codespace";
import typia from "typia";

export async function test_api_user_codespaces_patchByCodespace_name(
  connection: api.IConnection,
) {
  const output: codespace =
    await api.functional.user.codespaces.patchByCodespace_name(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
