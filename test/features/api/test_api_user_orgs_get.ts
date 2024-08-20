import api from "@kakasoo/github-sdk";
import { organization_minus_simple } from "@kakasoo/github-sdk/lib/structures/organization_minus_simple";
import typia from "typia";

export async function test_api_user_orgs_get(connection: api.IConnection) {
  const output: organization_minus_simple[] =
    await api.functional.user.orgs.get(connection);
  typia.assert(output);
}
