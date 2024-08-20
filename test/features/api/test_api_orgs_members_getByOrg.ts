import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { simple_minus_user } from "@ORGANIZATION/PROJECT-api/lib/structures/simple_minus_user";
import { IApiOrgsMembers } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsMembers";

export async function test_api_orgs_members_getByOrg(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] =
    await api.functional.orgs.members.getByOrg(
      connection,
      typia.random<string>(),
      typia.random<IApiOrgsMembers.GetQuery>(),
    );
  typia.assert(output);
}
