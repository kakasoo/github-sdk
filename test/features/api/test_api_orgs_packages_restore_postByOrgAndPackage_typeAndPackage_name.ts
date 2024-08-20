import api from "@kakasoo/github-sdk";
import { IApiOrgsPackagesRestore } from "@kakasoo/github-sdk/lib/structures/IApiOrgsPackagesRestore";
import typia from "typia";

export async function test_api_orgs_packages_restore_postByOrgAndPackage_typeAndPackage_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.packages.restore.postByOrgAndPackage_typeAndPackage_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiOrgsPackagesRestore.PostQuery>(),
    );
  typia.assert(output);
}
