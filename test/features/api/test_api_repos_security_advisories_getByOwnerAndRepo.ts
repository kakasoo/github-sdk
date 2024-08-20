import api from "@kakasoo/github-sdk";
import { IApiReposSecurityAdvisories } from "@kakasoo/github-sdk/lib/structures/IApiReposSecurityAdvisories";
import { repository_minus_advisory } from "@kakasoo/github-sdk/lib/structures/repository_minus_advisory";
import typia from "typia";

export async function test_api_repos_security_advisories_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: repository_minus_advisory[] =
    await api.functional.repos.security_advisories.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposSecurityAdvisories.GetQuery>(),
    );
  typia.assert(output);
}
