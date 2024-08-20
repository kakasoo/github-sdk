import api from "@kakasoo/github-sdk";
import { empty_minus_object } from "@kakasoo/github-sdk/lib/structures/empty_minus_object";
import typia from "typia";

export async function test_api_users_attestations_getByUsernameAndSubject_digest(
  connection: api.IConnection,
) {
  const output: empty_minus_object =
    await api.functional.users.attestations.getByUsernameAndSubject_digest(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
