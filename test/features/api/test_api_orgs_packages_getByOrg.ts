import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { package } from "@ORGANIZATION/PROJECT-api/lib/structures/package";
import { IApiOrgsPackages } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsPackages";

export async function test_api_orgs_packages_getByOrg(
  connection: api.IConnection,
) {
  const output: package[] = await api.functional.orgs.packages.getByOrg(
    connection,
    typia.random<string>(),
    typia.random<IApiOrgsPackages.GetQuery>(),
  );
  typia.assert(output);
}
