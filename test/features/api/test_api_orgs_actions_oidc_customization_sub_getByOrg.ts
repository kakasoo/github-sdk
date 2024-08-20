import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { oidc_minus_custom_minus_sub } from "@ORGANIZATION/PROJECT-api/lib/structures/oidc_minus_custom_minus_sub";

export async function test_api_orgs_actions_oidc_customization_sub_getByOrg(
  connection: api.IConnection,
) {
  const output: oidc_minus_custom_minus_sub =
    await api.functional.orgs.actions.oidc.customization.sub.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
