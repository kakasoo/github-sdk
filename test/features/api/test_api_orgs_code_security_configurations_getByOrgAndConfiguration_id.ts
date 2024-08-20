import api from "@kakasoo/github-sdk";
import { code_minus_security_minus_configuration } from "@kakasoo/github-sdk/lib/structures/code_minus_security_minus_configuration";
import typia from "typia";

export async function test_api_orgs_code_security_configurations_getByOrgAndConfiguration_id(
  connection: api.IConnection,
) {
  const output: code_minus_security_minus_configuration =
    await api.functional.orgs.code_security.configurations.getByOrgAndConfiguration_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
