import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository_minus_advisory } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_advisory";
import { IApiOrgsSecurityAdvisories } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsSecurityAdvisories";

export async function test_api_orgs_security_advisories_getByOrg(
  connection: api.IConnection,
) {
  const output: repository_minus_advisory[] =
    await api.functional.orgs.security_advisories.getByOrg(
      connection,
      typia.random<string>(),
      typia.random<IApiOrgsSecurityAdvisories.GetQuery>(),
    );
  typia.assert(output);
}
