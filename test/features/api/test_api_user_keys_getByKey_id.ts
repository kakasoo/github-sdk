import api from "@kakasoo/github-sdk";
import { key } from "@kakasoo/github-sdk/lib/structures/key";
import typia from "typia";

export async function test_api_user_keys_getByKey_id(
  connection: api.IConnection,
) {
  const output: key = await api.functional.user.keys.getByKey_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
