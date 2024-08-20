import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_user_starred_putByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output = await api.functional.user.starred.putByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
