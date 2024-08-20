import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_user_codespaces_eraseByCodespace_name(
  connection: api.IConnection,
) {
  const output = await api.functional.user.codespaces.eraseByCodespace_name(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
