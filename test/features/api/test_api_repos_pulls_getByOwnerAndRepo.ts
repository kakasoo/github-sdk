import api from "@kakasoo/github-sdk";
import { IApiReposPulls } from "@kakasoo/github-sdk/lib/structures/IApiReposPulls";
import { pull_minus_request_minus_simple } from "@kakasoo/github-sdk/lib/structures/pull_minus_request_minus_simple";
import typia from "typia";

export async function test_api_repos_pulls_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: pull_minus_request_minus_simple[] =
    await api.functional.repos.pulls.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposPulls.GetQuery>(),
    );
  typia.assert(output);
}
