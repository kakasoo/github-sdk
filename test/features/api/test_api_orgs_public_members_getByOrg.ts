import api from "@kakasoo/github-sdk";
import { simple_minus_user } from "@kakasoo/github-sdk/lib/structures/simple_minus_user";
import typia from "typia";

export async function test_api_orgs_public_members_getByOrg(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] =
    await api.functional.orgs.public_members.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
