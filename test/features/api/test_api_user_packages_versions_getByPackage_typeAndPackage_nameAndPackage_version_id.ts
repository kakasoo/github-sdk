import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { package_minus_version } from "@ORGANIZATION/PROJECT-api/lib/structures/package_minus_version";

export async function test_api_user_packages_versions_getByPackage_typeAndPackage_nameAndPackage_version_id(
  connection: api.IConnection,
) {
  const output: package_minus_version =
    await api.functional.user.packages.versions.getByPackage_typeAndPackage_nameAndPackage_version_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
