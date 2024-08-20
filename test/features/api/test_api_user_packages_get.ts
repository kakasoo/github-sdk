import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { package } from "@ORGANIZATION/PROJECT-api/lib/structures/package";
import { IApiUserPackages } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiUserPackages";

export async function test_api_user_packages_get(connection: api.IConnection) {
  const output: package[] = await api.functional.user.packages.get(
    connection,
    typia.random<IApiUserPackages.GetQuery>(),
  );
  typia.assert(output);
}
