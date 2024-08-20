import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_outside_collaborators_eraseByOrgAndUsername(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.outside_collaborators.eraseByOrgAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
