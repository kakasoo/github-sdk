import api from "@kakasoo/github-sdk";
import { packages } from "@kakasoo/github-sdk/lib/structures/package";
import typia from "typia";

export async function test_api_orgs_packages_getByOrgAndPackage_typeAndPackage_name(
  connection: api.IConnection,
) {
  const output: packages =
    await api.functional.orgs.packages.getByOrgAndPackage_typeAndPackage_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
