import api from "@kakasoo/github-sdk";
import { empty_minus_object } from "@kakasoo/github-sdk/lib/structures/empty_minus_object";
import { oidc_minus_custom_minus_sub } from "@kakasoo/github-sdk/lib/structures/oidc_minus_custom_minus_sub";
import typia from "typia";

export async function test_api_orgs_actions_oidc_customization_sub_putByOrg(
  connection: api.IConnection,
) {
  const output: empty_minus_object =
    await api.functional.orgs.actions.oidc.customization.sub.putByOrg(
      connection,
      typia.random<string>(),
      typia.random<oidc_minus_custom_minus_sub>(),
    );
  typia.assert(output);
}
