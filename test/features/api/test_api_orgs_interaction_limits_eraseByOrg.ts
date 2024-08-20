import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_interaction_limits_eraseByOrg(
  connection: api.IConnection,
) {
  const output = await api.functional.orgs.interaction_limits.eraseByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
