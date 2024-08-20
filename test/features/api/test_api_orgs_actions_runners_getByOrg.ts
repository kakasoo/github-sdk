import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiOrgsActionsRunners } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsActionsRunners";

export async function test_api_orgs_actions_runners_getByOrg(
  connection: api.IConnection,
) {
  const output: response = await api.functional.orgs.actions.runners.getByOrg(
    connection,
    typia.random<string>(),
    typia.random<IApiOrgsActionsRunners.GetQuery>(),
  );
  typia.assert(output);
}
