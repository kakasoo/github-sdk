import api from "@kakasoo/github-sdk";
import { IApiReposCodespacesPermissionsCheck } from "@kakasoo/github-sdk/lib/structures/IApiReposCodespacesPermissionsCheck";
import { codespaces_minus_permissions_minus_check_minus_for_minus_devcontainer } from "@kakasoo/github-sdk/lib/structures/codespaces_minus_permissions_minus_check_minus_for_minus_devcontainer";
import typia from "typia";

export async function test_api_repos_codespaces_permissions_check_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: codespaces_minus_permissions_minus_check_minus_for_minus_devcontainer =
    await api.functional.repos.codespaces.permissions_check.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposCodespacesPermissionsCheck.GetQuery>(),
    );
  typia.assert(output);
}
