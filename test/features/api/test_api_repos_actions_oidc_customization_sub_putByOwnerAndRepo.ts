import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { empty_minus_object } from "@kakasoo/github-sdk/lib/structures/empty_minus_object";
import typia from "typia";

export async function test_api_repos_actions_oidc_customization_sub_putByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: empty_minus_object =
    await api.functional.repos.actions.oidc.customization.sub.putByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
