import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_gitignore_templates_get(
  connection: api.IConnection,
) {
  const output: string[] =
    await api.functional.gitignore.templates.get(connection);
  typia.assert(output);
}
