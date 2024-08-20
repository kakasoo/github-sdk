import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { porter_minus_author } from "@ORGANIZATION/PROJECT-api/lib/structures/porter_minus_author";

export async function test_api_repos__import_authors_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: porter_minus_author[] =
    await api.functional.repos._import.authors.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
