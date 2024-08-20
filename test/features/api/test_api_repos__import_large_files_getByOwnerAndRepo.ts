import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { porter_minus_large_minus_file } from "@ORGANIZATION/PROJECT-api/lib/structures/porter_minus_large_minus_file";

export async function test_api_repos__import_large_files_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: porter_minus_large_minus_file[] =
    await api.functional.repos._import.large_files.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
