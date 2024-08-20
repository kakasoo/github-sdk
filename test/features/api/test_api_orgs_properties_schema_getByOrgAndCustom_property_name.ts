import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { custom_minus_property } from "@ORGANIZATION/PROJECT-api/lib/structures/custom_minus_property";

export async function test_api_orgs_properties_schema_getByOrgAndCustom_property_name(
  connection: api.IConnection,
) {
  const output: custom_minus_property =
    await api.functional.orgs.properties.schema.getByOrgAndCustom_property_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}