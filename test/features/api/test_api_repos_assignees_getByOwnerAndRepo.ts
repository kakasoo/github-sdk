import api from "@kakasoo/github-sdk";
import { simple_minus_user } from "@kakasoo/github-sdk/lib/structures/simple_minus_user";
import typia from "typia";

export async function test_api_repos_assignees_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] =
    await api.functional.repos.assignees.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
