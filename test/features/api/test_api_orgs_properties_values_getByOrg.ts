import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { org_minus_repo_minus_custom_minus_property_minus_values } from "@ORGANIZATION/PROJECT-api/lib/structures/org_minus_repo_minus_custom_minus_property_minus_values";
import { IApiOrgsPropertiesValues } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsPropertiesValues";

export async function test_api_orgs_properties_values_getByOrg(
  connection: api.IConnection,
) {
  const output: org_minus_repo_minus_custom_minus_property_minus_values[] =
    await api.functional.orgs.properties.values.getByOrg(
      connection,
      typia.random<string>(),
      typia.random<IApiOrgsPropertiesValues.GetQuery>(),
    );
  typia.assert(output);
}
