import api from "@kakasoo/github-sdk";
import { rate_minus_limit_minus_overview } from "@kakasoo/github-sdk/lib/structures/rate_minus_limit_minus_overview";
import typia from "typia";

export async function test_api_rate_limit_get(connection: api.IConnection) {
  const output: rate_minus_limit_minus_overview =
    await api.functional.rate_limit.get(connection);
  typia.assert(output);
}
