import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { gpg_minus_key } from "@kakasoo/github-sdk/lib/structures/gpg_minus_key";
import typia from "typia";

export async function test_api_user_gpg_keys_post(connection: api.IConnection) {
  const output: gpg_minus_key = await api.functional.user.gpg_keys.post(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
