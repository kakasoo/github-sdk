import api from "@kakasoo/github-sdk";
import { thread } from "@kakasoo/github-sdk/lib/structures/thread";
import typia from "typia";

export async function test_api_repos_notifications_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: thread[] =
    await api.functional.repos.notifications.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
