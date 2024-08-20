import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { rate_minus_limit_minus_overview } from "@ORGANIZATION/PROJECT-api/lib/structures/rate_minus_limit_minus_overview";

export async function test_api_rate_limit_get(connection: api.IConnection) {
  const output: rate_minus_limit_minus_overview =
    await api.functional.rate_limit.get(connection);
  typia.assert(output);
}
