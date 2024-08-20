import api from "@kakasoo/github-sdk";
import { repository_minus_subscription } from "@kakasoo/github-sdk/lib/structures/repository_minus_subscription";
import typia from "typia";

export async function test_api_repos_subscription_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: repository_minus_subscription =
    await api.functional.repos.subscription.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
