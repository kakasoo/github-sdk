import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_user_packages_versions_eraseByPackage_typeAndPackage_nameAndPackage_version_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.user.packages.versions.eraseByPackage_typeAndPackage_nameAndPackage_version_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
