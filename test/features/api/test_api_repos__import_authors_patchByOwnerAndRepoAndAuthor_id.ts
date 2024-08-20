import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { porter_minus_author } from "@ORGANIZATION/PROJECT-api/lib/structures/porter_minus_author";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos__import_authors_patchByOwnerAndRepoAndAuthor_id(
  connection: api.IConnection,
) {
  const output: porter_minus_author =
    await api.functional.repos._import.authors.patchByOwnerAndRepoAndAuthor_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
