import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_packages_versions_restore_postByOrgAndPackage_typeAndPackage_nameAndPackage_version_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.packages.versions.restore.postByOrgAndPackage_typeAndPackage_nameAndPackage_version_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
