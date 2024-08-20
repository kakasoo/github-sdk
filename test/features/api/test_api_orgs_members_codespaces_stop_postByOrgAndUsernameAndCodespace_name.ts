import api from "@kakasoo/github-sdk";
import { codespace } from "@kakasoo/github-sdk/lib/structures/codespace";
import typia from "typia";

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
