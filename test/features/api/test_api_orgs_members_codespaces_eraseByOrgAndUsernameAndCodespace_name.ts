import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_members_codespaces_eraseByOrgAndUsernameAndCodespace_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.members.codespaces.eraseByOrgAndUsernameAndCodespace_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
