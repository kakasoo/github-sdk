import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_zen_get(connection: api.IConnection) {
  const output: string = await api.functional.zen.get(connection);
  typia.assert(output);
}
