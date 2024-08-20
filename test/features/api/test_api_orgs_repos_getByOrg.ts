import api from "@kakasoo/github-sdk";
import { IApiOrgsRepos } from "@kakasoo/github-sdk/lib/structures/IApiOrgsRepos";
import { minimal_minus_repository } from "@kakasoo/github-sdk/lib/structures/minimal_minus_repository";
import typia from "typia";

export async function test_api_orgs_repos_getByOrg(
  connection: api.IConnection,
) {
  const output: minimal_minus_repository[] =
    await api.functional.orgs.repos.getByOrg(
      connection,
      typia.random<string>(),
      typia.random<IApiOrgsRepos.GetQuery>(),
    );
  typia.assert(output);
}
