import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { reaction } from "@ORGANIZATION/PROJECT-api/lib/structures/reaction";
import { IApiReposReleasesReactions } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposReleasesReactions";

export async function test_api_repos_releases_reactions_getByOwnerAndRepoAndRelease_id(
  connection: api.IConnection,
) {
  const output: reaction[] =
    await api.functional.repos.releases.reactions.getByOwnerAndRepoAndRelease_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposReleasesReactions.GetQuery>(),
    );
  typia.assert(output);
}
