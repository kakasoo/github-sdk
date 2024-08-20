import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { package_minus_version } from "@ORGANIZATION/PROJECT-api/lib/structures/package_minus_version";
import { IApiOrgsPackagesVersions } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsPackagesVersions";

export async function test_api_orgs_packages_versions_getByOrgAndPackage_typeAndPackage_name(
  connection: api.IConnection,
) {
  const output: package_minus_version[] =
    await api.functional.orgs.packages.versions.getByOrgAndPackage_typeAndPackage_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiOrgsPackagesVersions.GetQuery>(),
    );
  typia.assert(output);
}
