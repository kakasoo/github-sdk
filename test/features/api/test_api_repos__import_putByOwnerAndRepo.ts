import api from "@kakasoo/github-sdk";
import typia from "typia";

;
import { import } from "@kakasoo/github-sdk/lib/structures/import";
import { body } from "@kakasoo/github-sdk/lib/structures/body";

;
export async function test_api_repos__import_putByOwnerAndRepo(connection: api.IConnection) {
    const output: import = await api.functional.repos._import.putByOwnerAndRepo(connection, typia.random<string>(), typia.random<string>(), typia.random<body>());
    typia.assert(output);
}
