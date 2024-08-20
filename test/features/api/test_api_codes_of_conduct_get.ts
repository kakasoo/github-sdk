import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_of_minus_conduct } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_of_minus_conduct";

export async function test_api_codes_of_conduct_get(
  connection: api.IConnection,
) {
  const output: code_minus_of_minus_conduct[] =
    await api.functional.codes_of_conduct.get(connection);
  typia.assert(output);
}
