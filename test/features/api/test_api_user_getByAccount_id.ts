import api from "@kakasoo/github-sdk";
import { private_minus_user } from "@kakasoo/github-sdk/lib/structures/private_minus_user";
import { public_minus_user } from "@kakasoo/github-sdk/lib/structures/public_minus_user";
import typia from "typia";

export async function test_api_user_getByAccount_id(
  connection: api.IConnection,
) {
  const output: private_minus_user | public_minus_user =
    await api.functional.user.getByAccount_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
