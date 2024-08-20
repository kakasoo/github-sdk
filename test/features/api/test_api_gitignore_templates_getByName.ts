import api from "@kakasoo/github-sdk";
import { gitignore_minus_template } from "@kakasoo/github-sdk/lib/structures/gitignore_minus_template";
import typia from "typia";

export async function test_api_gitignore_templates_getByName(
  connection: api.IConnection,
) {
  const output: gitignore_minus_template =
    await api.functional.gitignore.templates.getByName(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
