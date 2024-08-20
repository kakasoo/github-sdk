import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { key } from "@kakasoo/github-sdk/lib/structures/key";
import typia from "typia";

export async function test_api_user_keys_post(connection: api.IConnection) {
  const output: key = await api.functional.user.keys.post(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
