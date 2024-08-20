import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_installation_token_erase(
  connection: api.IConnection,
) {
  const output = await api.functional.installation.token.erase(connection);
  typia.assert(output);
}
