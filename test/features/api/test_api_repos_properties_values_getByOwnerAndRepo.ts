import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { custom_minus_property_minus_value } from "@ORGANIZATION/PROJECT-api/lib/structures/custom_minus_property_minus_value";

export async function test_api_repos_properties_values_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: custom_minus_property_minus_value[] =
    await api.functional.repos.properties.values.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
