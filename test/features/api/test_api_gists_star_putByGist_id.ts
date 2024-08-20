import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_gists_star_putByGist_id(
  connection: api.IConnection,
) {
  const output = await api.functional.gists.star.putByGist_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
