import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_public_members_putByOrgAndUsername(
  connection: api.IConnection,
) {
  const output = await api.functional.orgs.public_members.putByOrgAndUsername(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
