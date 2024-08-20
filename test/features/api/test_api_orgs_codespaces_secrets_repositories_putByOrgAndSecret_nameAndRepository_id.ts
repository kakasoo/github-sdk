import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

export async function test_api_orgs_codespaces_secrets_repositories_putByOrgAndSecret_nameAndRepository_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.codespaces.secrets.repositories.putByOrgAndSecret_nameAndRepository_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
    );
  typia.assert(output);
}
