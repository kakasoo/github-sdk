import api from "@kakasoo/github-sdk";
import { runner_minus_application } from "@kakasoo/github-sdk/lib/structures/runner_minus_application";
import typia from "typia";

export async function test_api_orgs_actions_runners_downloads_getByOrg(
  connection: api.IConnection,
) {
  const output: runner_minus_application[] =
    await api.functional.orgs.actions.runners.downloads.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
