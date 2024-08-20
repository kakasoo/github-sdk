import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { org_minus_hook } from "@ORGANIZATION/PROJECT-api/lib/structures/org_minus_hook";

export async function test_api_orgs_hooks_getByOrgAndHook_id(
  connection: api.IConnection,
) {
  const output: org_minus_hook =
    await api.functional.orgs.hooks.getByOrgAndHook_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
