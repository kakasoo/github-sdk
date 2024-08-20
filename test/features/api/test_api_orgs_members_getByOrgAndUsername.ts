import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_members_getByOrgAndUsername(
  connection: api.IConnection,
) {
  const output = await api.functional.orgs.members.getByOrgAndUsername(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
