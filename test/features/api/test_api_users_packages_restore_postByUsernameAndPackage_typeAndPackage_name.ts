import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IApiUsersPackagesRestore } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiUsersPackagesRestore";

export async function test_api_users_packages_restore_postByUsernameAndPackage_typeAndPackage_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.users.packages.restore.postByUsernameAndPackage_typeAndPackage_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiUsersPackagesRestore.PostQuery>(),
    );
  typia.assert(output);
}
