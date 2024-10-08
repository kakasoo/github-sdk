import api from "@kakasoo/github-sdk";
import { simple_minus_user } from "@kakasoo/github-sdk/lib/structures/simple_minus_user";
import { stargazer } from "@kakasoo/github-sdk/lib/structures/stargazer";
import typia from "typia";

export async function test_api_repos_stargazers_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] | stargazer[] =
    await api.functional.repos.stargazers.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
