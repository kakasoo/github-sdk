import api from "@kakasoo/github-sdk";
import { view_minus_traffic } from "@kakasoo/github-sdk/lib/structures/view_minus_traffic";
import typia from "typia";

export async function test_api_repos_traffic_views_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: view_minus_traffic =
    await api.functional.repos.traffic.views.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
