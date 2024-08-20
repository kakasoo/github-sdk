import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { codespaces_minus_org_minus_secret } from "@ORGANIZATION/PROJECT-api/lib/structures/codespaces_minus_org_minus_secret";

export async function test_api_orgs_codespaces_secrets_getByOrgAndSecret_name(
  connection: api.IConnection,
) {
  const output: codespaces_minus_org_minus_secret =
    await api.functional.orgs.codespaces.secrets.getByOrgAndSecret_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
