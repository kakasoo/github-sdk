import api from "@kakasoo/github-sdk";
import { installation } from "@kakasoo/github-sdk/lib/structures/installation";
import typia from "typia";

export async function test_api_orgs_installation_getByOrg(
  connection: api.IConnection,
) {
  const output: installation = await api.functional.orgs.installation.getByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
