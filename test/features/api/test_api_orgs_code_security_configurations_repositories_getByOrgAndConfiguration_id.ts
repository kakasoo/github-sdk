import api from "@kakasoo/github-sdk";
import { IApiOrgsCodeSecurityConfigurationsRepositories } from "@kakasoo/github-sdk/lib/structures/IApiOrgsCodeSecurityConfigurationsRepositories";
import { code_minus_security_minus_configuration_minus_repositories } from "@kakasoo/github-sdk/lib/structures/code_minus_security_minus_configuration_minus_repositories";
import typia from "typia";

export async function test_api_orgs_code_security_configurations_repositories_getByOrgAndConfiguration_id(
  connection: api.IConnection,
) {
  const output: code_minus_security_minus_configuration_minus_repositories[] =
    await api.functional.orgs.code_security.configurations.repositories.getByOrgAndConfiguration_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiOrgsCodeSecurityConfigurationsRepositories.GetQuery>(),
    );
  typia.assert(output);
}
