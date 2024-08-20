import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_user_blocks_getByUsername(
  connection: api.IConnection,
) {
  const output = await api.functional.user.blocks.getByUsername(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
