import api from "@kakasoo/github-sdk";
import { oidc_minus_custom_minus_sub_minus_repo } from "@kakasoo/github-sdk/lib/structures/oidc_minus_custom_minus_sub_minus_repo";
import typia from "typia";

export async function test_api_repos_actions_oidc_customization_sub_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: oidc_minus_custom_minus_sub_minus_repo =
    await api.functional.repos.actions.oidc.customization.sub.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
