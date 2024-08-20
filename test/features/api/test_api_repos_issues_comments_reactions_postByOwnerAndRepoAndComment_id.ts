import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { reaction } from "@kakasoo/github-sdk/lib/structures/reaction";
import typia from "typia";

export async function test_api_repos_issues_comments_reactions_postByOwnerAndRepoAndComment_id(
  connection: api.IConnection,
) {
  const output: reaction =
    await api.functional.repos.issues.comments.reactions.postByOwnerAndRepoAndComment_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
