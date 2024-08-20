import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { global_minus_advisory } from "@ORGANIZATION/PROJECT-api/lib/structures/global_minus_advisory";

export async function test_api_advisories_getByGhsa_id(
  connection: api.IConnection,
) {
  const output: global_minus_advisory =
    await api.functional.advisories.getByGhsa_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
