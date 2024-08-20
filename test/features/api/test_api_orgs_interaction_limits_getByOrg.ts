import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_orgs_interaction_limits_getByOrg(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.orgs.interaction_limits.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
