import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_security_minus_configuration_minus_repositories } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_security_minus_configuration_minus_repositories";
import { IApiOrgsCodeSecurityConfigurationsRepositories } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsCodeSecurityConfigurationsRepositories";

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
