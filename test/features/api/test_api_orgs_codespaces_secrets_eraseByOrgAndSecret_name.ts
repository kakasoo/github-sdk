import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_codespaces_secrets_eraseByOrgAndSecret_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.codespaces.secrets.eraseByOrgAndSecret_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
