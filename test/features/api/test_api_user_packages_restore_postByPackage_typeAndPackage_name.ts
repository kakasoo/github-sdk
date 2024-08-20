import api from "@kakasoo/github-sdk";
import { IApiUserPackagesRestore } from "@kakasoo/github-sdk/lib/structures/IApiUserPackagesRestore";
import typia from "typia";

export async function test_api_user_packages_restore_postByPackage_typeAndPackage_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.user.packages.restore.postByPackage_typeAndPackage_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiUserPackagesRestore.PostQuery>(),
    );
  typia.assert(output);
}
