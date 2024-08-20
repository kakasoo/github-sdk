import api from "@kakasoo/github-sdk";
import { runner } from "@kakasoo/github-sdk/lib/structures/runner";
import typia from "typia";

export async function test_api_orgs_actions_runners_getByOrgAndRunner_id(
  connection: api.IConnection,
) {
  const output: runner =
    await api.functional.orgs.actions.runners.getByOrgAndRunner_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
