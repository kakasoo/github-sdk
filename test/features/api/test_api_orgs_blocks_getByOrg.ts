import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { simple_minus_user } from "@ORGANIZATION/PROJECT-api/lib/structures/simple_minus_user";

export async function test_api_orgs_blocks_getByOrg(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] = await api.functional.orgs.blocks.getByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}