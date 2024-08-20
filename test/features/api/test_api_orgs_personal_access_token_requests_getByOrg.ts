import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_programmatic_minus_access_minus_grant_minus_request } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_programmatic_minus_access_minus_grant_minus_request";

export async function test_api_orgs_personal_access_token_requests_getByOrg(
  connection: api.IConnection,
) {
  const output: organization_minus_programmatic_minus_access_minus_grant_minus_request[] =
    await api.functional.orgs.personal_access_token_requests.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
