import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_programmatic_minus_access_minus_grant } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_programmatic_minus_access_minus_grant";

export async function test_api_orgs_personal_access_tokens_getByOrg(
  connection: api.IConnection,
) {
  const output: organization_minus_programmatic_minus_access_minus_grant[] =
    await api.functional.orgs.personal_access_tokens.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
