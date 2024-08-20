import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_security_minus_configuration } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_security_minus_configuration";
import { IApiOrgsCodeSecurityConfigurations } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsCodeSecurityConfigurations";

export async function test_api_orgs_code_security_configurations_getByOrg(
  connection: api.IConnection,
) {
  const output: code_minus_security_minus_configuration[] =
    await api.functional.orgs.code_security.configurations.getByOrg(
      connection,
      typia.random<string>(),
      typia.random<IApiOrgsCodeSecurityConfigurations.GetQuery>(),
    );
  typia.assert(output);
}
