import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_user_installations_repositories_getByInstallation_id(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.user.installations.repositories.getByInstallation_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
