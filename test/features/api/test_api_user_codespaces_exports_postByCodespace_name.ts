import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_user_codespaces_exports_postByCodespace_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.user.codespaces.exports.postByCodespace_name(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
