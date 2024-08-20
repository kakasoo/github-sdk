import api from "@kakasoo/github-sdk";
import { IApiOrgsPackages } from "@kakasoo/github-sdk/lib/structures/IApiOrgsPackages";
import { packages } from "@kakasoo/github-sdk/lib/structures/package";
import typia from "typia";

export async function test_api_orgs_packages_getByOrg(
  connection: api.IConnection,
) {
  const output: packages[] = await api.functional.orgs.packages.getByOrg(
    connection,
    typia.random<string>(),
    typia.random<IApiOrgsPackages.GetQuery>(),
  );
  typia.assert(output);
}
