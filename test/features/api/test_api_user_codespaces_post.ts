import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { codespace } from "@kakasoo/github-sdk/lib/structures/codespace";
import typia from "typia";

export async function test_api_user_codespaces_post(
  connection: api.IConnection,
) {
  const output: codespace = await api.functional.user.codespaces.post(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
