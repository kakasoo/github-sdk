import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_orgs_actions_runners_labels_getByOrgAndRunner_id(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.orgs.actions.runners.labels.getByOrgAndRunner_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
