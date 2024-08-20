import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { gitignore_minus_template } from "@ORGANIZATION/PROJECT-api/lib/structures/gitignore_minus_template";

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
