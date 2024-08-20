import api from "@kakasoo/github-sdk";
import { package_minus_version } from "@kakasoo/github-sdk/lib/structures/package_minus_version";
import typia from "typia";

export async function test_api_users_packages_versions_getByUsernameAndPackage_typeAndPackage_name(
  connection: api.IConnection,
) {
  const output: package_minus_version[] =
    await api.functional.users.packages.versions.getByUsernameAndPackage_typeAndPackage_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
