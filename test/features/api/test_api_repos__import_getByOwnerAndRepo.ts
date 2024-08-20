import api from "@kakasoo/github-sdk";
import typia from "typia";

;
import { import } from "@kakasoo/github-sdk/lib/structures/import";

;
export async function test_api_repos__import_getByOwnerAndRepo(connection: api.IConnection) {
    const output: import = await api.functional.repos._import.getByOwnerAndRepo(connection, typia.random<string>(), typia.random<string>());
    typia.assert(output);
}
