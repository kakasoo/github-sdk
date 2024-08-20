import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_blocks_eraseByOrgAndUsername(
  connection: api.IConnection,
) {
  const output = await api.functional.orgs.blocks.eraseByOrgAndUsername(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
