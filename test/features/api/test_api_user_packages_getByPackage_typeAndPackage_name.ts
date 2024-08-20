import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { package } from "@ORGANIZATION/PROJECT-api/lib/structures/package";

export async function test_api_user_packages_getByPackage_typeAndPackage_name(
  connection: api.IConnection,
) {
  const output: package =
    await api.functional.user.packages.getByPackage_typeAndPackage_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
