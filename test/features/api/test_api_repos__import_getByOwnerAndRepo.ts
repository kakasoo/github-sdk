import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

;
import { import } from "@ORGANIZATION/PROJECT-api/lib/structures/import";

;
export async function test_api_repos__import_getByOwnerAndRepo(connection: api.IConnection) {
    const output: import = await api.functional.repos._import.getByOwnerAndRepo(connection, typia.random<string>(), typia.random<string>());
    typia.assert(output);
}
