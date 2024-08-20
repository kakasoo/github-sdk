import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { repository_minus_subscription } from "@kakasoo/github-sdk/lib/structures/repository_minus_subscription";
import typia from "typia";

export async function test_api_repos_subscription_putByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: repository_minus_subscription =
    await api.functional.repos.subscription.putByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
