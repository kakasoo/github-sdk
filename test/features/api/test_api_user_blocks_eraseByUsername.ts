import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_user_blocks_eraseByUsername(
  connection: api.IConnection,
) {
  const output = await api.functional.user.blocks.eraseByUsername(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
