import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { global_minus_advisory } from "@ORGANIZATION/PROJECT-api/lib/structures/global_minus_advisory";
import { IApiAdvisories } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiAdvisories";

export async function test_api_advisories_get(connection: api.IConnection) {
  const output: global_minus_advisory[] = await api.functional.advisories.get(
    connection,
    typia.random<IApiAdvisories.GetQuery>(),
  );
  typia.assert(output);
}
