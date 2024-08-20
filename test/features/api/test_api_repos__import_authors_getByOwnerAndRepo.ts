import api from "@kakasoo/github-sdk";
import { porter_minus_author } from "@kakasoo/github-sdk/lib/structures/porter_minus_author";
import typia from "typia";

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
