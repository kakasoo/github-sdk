import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_properties_schema_eraseByOrgAndCustom_property_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.properties.schema.eraseByOrgAndCustom_property_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
