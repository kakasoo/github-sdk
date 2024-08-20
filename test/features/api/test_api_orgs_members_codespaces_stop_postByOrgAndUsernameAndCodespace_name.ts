import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { codespace } from "@ORGANIZATION/PROJECT-api/lib/structures/codespace";

export async function test_api_orgs_members_codespaces_stop_postByOrgAndUsernameAndCodespace_name(
  connection: api.IConnection,
) {
  const output: codespace =
    await api.functional.orgs.members.codespaces.stop.postByOrgAndUsernameAndCodespace_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
