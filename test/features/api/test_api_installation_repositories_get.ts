import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_installation_repositories_get(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.installation.repositories.get(connection);
  typia.assert(output);
}
