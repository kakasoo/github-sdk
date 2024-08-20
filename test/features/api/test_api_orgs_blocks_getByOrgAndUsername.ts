import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_blocks_getByOrgAndUsername(
  connection: api.IConnection,
) {
  const output = await api.functional.orgs.blocks.getByOrgAndUsername(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
