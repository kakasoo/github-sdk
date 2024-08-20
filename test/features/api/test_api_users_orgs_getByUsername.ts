import api from "@kakasoo/github-sdk";
import { organization_minus_simple } from "@kakasoo/github-sdk/lib/structures/organization_minus_simple";
import typia from "typia";

export async function test_api_users_orgs_getByUsername(
  connection: api.IConnection,
) {
  const output: organization_minus_simple[] =
    await api.functional.users.orgs.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
