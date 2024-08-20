import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_gists_star_getByGist_id(
  connection: api.IConnection,
) {
  const output = await api.functional.gists.star.getByGist_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
