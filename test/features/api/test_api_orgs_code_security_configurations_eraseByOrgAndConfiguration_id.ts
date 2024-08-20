import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_code_security_configurations_eraseByOrgAndConfiguration_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.code_security.configurations.eraseByOrgAndConfiguration_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
