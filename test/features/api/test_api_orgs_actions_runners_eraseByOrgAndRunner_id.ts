import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_actions_runners_eraseByOrgAndRunner_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.actions.runners.eraseByOrgAndRunner_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
