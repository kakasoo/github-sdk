import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

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
