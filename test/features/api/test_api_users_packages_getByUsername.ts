import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { package } from "@ORGANIZATION/PROJECT-api/lib/structures/package";
import { IApiUsersPackages } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiUsersPackages";

export async function test_api_users_packages_getByUsername(
  connection: api.IConnection,
) {
  const output: package[] = await api.functional.users.packages.getByUsername(
    connection,
    typia.random<string>(),
    typia.random<IApiUsersPackages.GetQuery>(),
  );
  typia.assert(output);
}
