import api from "@kakasoo/github-sdk";
import { IApiUsersPackagesRestore } from "@kakasoo/github-sdk/lib/structures/IApiUsersPackagesRestore";
import typia from "typia";

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
