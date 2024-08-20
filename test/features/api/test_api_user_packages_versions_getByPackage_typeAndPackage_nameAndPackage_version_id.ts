import api from "@kakasoo/github-sdk";
import { package_minus_version } from "@kakasoo/github-sdk/lib/structures/package_minus_version";
import typia from "typia";

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
