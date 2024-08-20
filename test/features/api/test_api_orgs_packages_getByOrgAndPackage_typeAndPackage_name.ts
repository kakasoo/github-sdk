import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { package } from "@ORGANIZATION/PROJECT-api/lib/structures/package";

export async function test_api_orgs_packages_getByOrgAndPackage_typeAndPackage_name(
  connection: api.IConnection,
) {
  const output: package =
    await api.functional.orgs.packages.getByOrgAndPackage_typeAndPackage_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
