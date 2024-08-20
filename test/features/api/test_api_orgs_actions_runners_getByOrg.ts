import api from "@kakasoo/github-sdk";
import { IApiOrgsActionsRunners } from "@kakasoo/github-sdk/lib/structures/IApiOrgsActionsRunners";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

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
