import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { IApiUserPackagesRestore } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiUserPackagesRestore";

export async function test_api_user_packages_restore_postByPackage_typeAndPackage_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.user.packages.restore.postByPackage_typeAndPackage_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiUserPackagesRestore.PostQuery>(),
    );
  typia.assert(output);
}
