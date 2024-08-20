import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_hooks_eraseByOrgAndHook_id(
  connection: api.IConnection,
) {
  const output = await api.functional.orgs.hooks.eraseByOrgAndHook_id(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
