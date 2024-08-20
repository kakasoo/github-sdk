import api from "@kakasoo/github-sdk";
import { org_minus_hook } from "@kakasoo/github-sdk/lib/structures/org_minus_hook";
import typia from "typia";

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
