import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { porter_minus_author } from "@kakasoo/github-sdk/lib/structures/porter_minus_author";
import typia, { tags } from "typia";

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
