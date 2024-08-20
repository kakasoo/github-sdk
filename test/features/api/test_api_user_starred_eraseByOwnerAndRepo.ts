import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_user_starred_eraseByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output = await api.functional.user.starred.eraseByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
