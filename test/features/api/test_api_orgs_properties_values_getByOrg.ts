import api from "@kakasoo/github-sdk";
import { IApiOrgsPropertiesValues } from "@kakasoo/github-sdk/lib/structures/IApiOrgsPropertiesValues";
import { org_minus_repo_minus_custom_minus_property_minus_values } from "@kakasoo/github-sdk/lib/structures/org_minus_repo_minus_custom_minus_property_minus_values";
import typia from "typia";

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
