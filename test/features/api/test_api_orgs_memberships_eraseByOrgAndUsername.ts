import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_memberships_eraseByOrgAndUsername(
  connection: api.IConnection,
) {
  const output = await api.functional.orgs.memberships.eraseByOrgAndUsername(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
