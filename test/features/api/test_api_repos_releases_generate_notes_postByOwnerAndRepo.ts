import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { release_minus_notes_minus_content } from "@kakasoo/github-sdk/lib/structures/release_minus_notes_minus_content";
import typia from "typia";

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
