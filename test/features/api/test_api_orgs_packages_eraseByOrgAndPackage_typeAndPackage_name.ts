import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_orgs_packages_eraseByOrgAndPackage_typeAndPackage_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.packages.eraseByOrgAndPackage_typeAndPackage_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
