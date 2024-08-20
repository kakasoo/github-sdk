import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_orgs_actions_runners_labels_putByOrgAndRunner_id(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.orgs.actions.runners.labels.putByOrgAndRunner_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
