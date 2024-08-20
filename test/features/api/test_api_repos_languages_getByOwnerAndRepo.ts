import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { language } from "@ORGANIZATION/PROJECT-api/lib/structures/language";

export async function test_api_repos_languages_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: language =
    await api.functional.repos.languages.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
