import api from "@kakasoo/github-sdk";
import { IApiOrgsPackagesVersions } from "@kakasoo/github-sdk/lib/structures/IApiOrgsPackagesVersions";
import { package_minus_version } from "@kakasoo/github-sdk/lib/structures/package_minus_version";
import typia from "typia";

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
