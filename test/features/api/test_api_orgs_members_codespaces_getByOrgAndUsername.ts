import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

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
