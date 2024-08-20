import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiAssignments } from "../../structures/IApiAssignments";
import { classroom_minus_assignment } from "../../structures/classroom_minus_assignment";
export * as accepted_assignments from "./accepted_assignments";
export * as grades from "./grades";
/**
 * Get an assignment.
 * Gets a GitHub Classroom assignment. Assignment will only be returned if the current user is an administrator of the GitHub Classroom for the assignment.
 *
 * @tag classroom
 * @path assignments/:assignment_id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByAssignment_id(
  connection: IConnection<getByAssignment_id.Headers>,
  assignment_id: string,
): Promise<getByAssignment_id.Output> {
  return !!connection.simulate
    ? getByAssignment_id.simulate(connection, assignment_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByAssignment_id.METADATA,
          path: getByAssignment_id.path(assignment_id),
          status: null,
        },
      );
}
export namespace getByAssignment_id {
  export type Headers = IApiAssignments.GetHeader;
  export type Output = classroom_minus_assignment;

  export const METADATA = {
    method: "GET",
    path: "/assignments/:assignment_id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (assignment_id: string) =>
    `/assignments/${encodeURIComponent(assignment_id ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): classroom_minus_assignment => typia.random<classroom_minus_assignment>(g);
  export const simulate = (
    connection: IConnection<getByAssignment_id.Headers>,
    assignment_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByAssignment_id.path(assignment_id),
      contentType: "application/json",
    });
    try {
      assert.param("assignment_id")(() => typia.assert(assignment_id));
    } catch (exp) {
      if (!typia.is<HttpError>(exp)) throw exp;
      return {
        success: false,
        status: exp.status,
        headers: exp.headers,
        data: exp.toJSON().message,
      } as any;
    }
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
