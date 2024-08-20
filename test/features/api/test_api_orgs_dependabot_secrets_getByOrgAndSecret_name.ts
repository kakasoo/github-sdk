import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_dependabot_minus_secret } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_dependabot_minus_secret";

export async function test_api_orgs_dependabot_secrets_getByOrgAndSecret_name(
  connection: api.IConnection,
) {
  const output: organization_minus_dependabot_minus_secret =
    await api.functional.orgs.dependabot.secrets.getByOrgAndSecret_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
