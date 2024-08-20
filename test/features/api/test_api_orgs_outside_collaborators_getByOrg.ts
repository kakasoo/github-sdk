import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { simple_minus_user } from "@ORGANIZATION/PROJECT-api/lib/structures/simple_minus_user";
import { IApiOrgsOutsideCollaborators } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsOutsideCollaborators";

export async function test_api_orgs_outside_collaborators_getByOrg(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] =
    await api.functional.orgs.outside_collaborators.getByOrg(
      connection,
      typia.random<string>(),
      typia.random<IApiOrgsOutsideCollaborators.GetQuery>(),
    );
  typia.assert(output);
}
