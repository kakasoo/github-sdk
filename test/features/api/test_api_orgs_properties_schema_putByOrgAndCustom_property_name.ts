import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { custom_minus_property } from "@ORGANIZATION/PROJECT-api/lib/structures/custom_minus_property";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_orgs_properties_schema_putByOrgAndCustom_property_name(
  connection: api.IConnection,
) {
  const output: custom_minus_property =
    await api.functional.orgs.properties.schema.putByOrgAndCustom_property_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
