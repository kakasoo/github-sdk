import api from "@kakasoo/github-sdk";
import { organization_minus_full } from "@kakasoo/github-sdk/lib/structures/organization_minus_full";
import typia from "typia";

export async function test_api_orgs_getByOrg(connection: api.IConnection) {
  const output: organization_minus_full = await api.functional.orgs.getByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
