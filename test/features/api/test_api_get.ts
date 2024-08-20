import api from "@kakasoo/github-sdk";
import { root } from "@kakasoo/github-sdk/lib/structures/root";
import typia from "typia";

export async function test_api_get(connection: api.IConnection) {
  const output: root = await api.functional.get(connection);
  typia.assert(output);
}
