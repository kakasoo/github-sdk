import api from "@kakasoo/github-sdk";
import { api_minus_overview } from "@kakasoo/github-sdk/lib/structures/api_minus_overview";
import typia from "typia";

export async function test_api_meta_get(connection: api.IConnection) {
  const output: api_minus_overview = await api.functional.meta.get(connection);
  typia.assert(output);
}
