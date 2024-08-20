import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { community_minus_profile } from "@ORGANIZATION/PROJECT-api/lib/structures/community_minus_profile";

export async function test_api_repos_community_profile_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: community_minus_profile =
    await api.functional.repos.community.profile.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
