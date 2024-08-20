import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_orgs_members_codespaces_getByOrgAndUsername(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.orgs.members.codespaces.getByOrgAndUsername(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
