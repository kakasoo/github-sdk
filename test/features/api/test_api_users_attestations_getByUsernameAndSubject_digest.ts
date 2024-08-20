import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { empty_minus_object } from "@ORGANIZATION/PROJECT-api/lib/structures/empty_minus_object";

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
