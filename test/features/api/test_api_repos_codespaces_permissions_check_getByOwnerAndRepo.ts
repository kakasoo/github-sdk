import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { codespaces_minus_permissions_minus_check_minus_for_minus_devcontainer } from "@ORGANIZATION/PROJECT-api/lib/structures/codespaces_minus_permissions_minus_check_minus_for_minus_devcontainer";
import { IApiReposCodespacesPermissionsCheck } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposCodespacesPermissionsCheck";

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
