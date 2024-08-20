import api from "@kakasoo/github-sdk";
import { oidc_minus_custom_minus_sub } from "@kakasoo/github-sdk/lib/structures/oidc_minus_custom_minus_sub";
import typia from "typia";

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
