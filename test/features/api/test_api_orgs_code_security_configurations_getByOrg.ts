import api from "@kakasoo/github-sdk";
import { IApiOrgsCodeSecurityConfigurations } from "@kakasoo/github-sdk/lib/structures/IApiOrgsCodeSecurityConfigurations";
import { code_minus_security_minus_configuration } from "@kakasoo/github-sdk/lib/structures/code_minus_security_minus_configuration";
import typia from "typia";

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
