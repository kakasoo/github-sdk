import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { custom_minus_property } from "@ORGANIZATION/PROJECT-api/lib/structures/custom_minus_property";

export async function test_api_orgs_properties_schema_getByOrg(
  connection: api.IConnection,
) {
  const output: custom_minus_property[] =
    await api.functional.orgs.properties.schema.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
