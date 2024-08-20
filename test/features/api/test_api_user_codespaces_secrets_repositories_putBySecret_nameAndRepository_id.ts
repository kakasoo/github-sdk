import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

export async function test_api_user_codespaces_secrets_repositories_putBySecret_nameAndRepository_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.user.codespaces.secrets.repositories.putBySecret_nameAndRepository_id(
      connection,
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
    );
  typia.assert(output);
}
