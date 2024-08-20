import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { private_minus_user } from "@kakasoo/github-sdk/lib/structures/private_minus_user";
import typia from "typia";

export async function test_api_user_patch(connection: api.IConnection) {
  const output: private_minus_user = await api.functional.user.patch(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
