import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { installation } from "@ORGANIZATION/PROJECT-api/lib/structures/installation";
import { IApiAppInstallations } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiAppInstallations";

export async function test_api_app_installations_get(
  connection: api.IConnection,
) {
  const output: installation[] = await api.functional.app.installations.get(
    connection,
    typia.random<IApiAppInstallations.GetQuery>(),
  );
  typia.assert(output);
}
