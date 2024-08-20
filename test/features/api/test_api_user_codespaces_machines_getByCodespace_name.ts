import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_user_codespaces_machines_getByCodespace_name(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.user.codespaces.machines.getByCodespace_name(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
