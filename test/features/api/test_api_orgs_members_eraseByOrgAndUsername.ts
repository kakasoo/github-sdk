import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_members_eraseByOrgAndUsername(
  connection: api.IConnection,
) {
  const output = await api.functional.orgs.members.eraseByOrgAndUsername(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
