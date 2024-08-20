import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_user_blocks_putByUsername(
  connection: api.IConnection,
) {
  const output = await api.functional.user.blocks.putByUsername(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
