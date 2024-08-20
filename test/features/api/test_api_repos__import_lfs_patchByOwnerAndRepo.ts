import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

;
import { import } from "@ORGANIZATION/PROJECT-api/lib/structures/import";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

;
export async function test_api_repos__import_lfs_patchByOwnerAndRepo(connection: api.IConnection) {
    const output: import = await api.functional.repos._import.lfs.patchByOwnerAndRepo(connection, typia.random<string>(), typia.random<string>(), typia.random<body>());
    typia.assert(output);
}
