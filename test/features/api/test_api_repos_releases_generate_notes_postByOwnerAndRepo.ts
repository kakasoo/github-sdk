import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { release_minus_notes_minus_content } from "@ORGANIZATION/PROJECT-api/lib/structures/release_minus_notes_minus_content";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_releases_generate_notes_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: release_minus_notes_minus_content =
    await api.functional.repos.releases.generate_notes.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
