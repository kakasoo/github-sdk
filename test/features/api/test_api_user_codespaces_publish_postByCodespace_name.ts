import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { codespace_minus_with_minus_full_minus_repository } from "@kakasoo/github-sdk/lib/structures/codespace_minus_with_minus_full_minus_repository";
import typia from "typia";

export async function test_api_user_codespaces_publish_postByCodespace_name(
  connection: api.IConnection,
) {
  const output: codespace_minus_with_minus_full_minus_repository =
    await api.functional.user.codespaces.publish.postByCodespace_name(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
