import { IConnection, HttpError } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";

import { IApiClassroomsAssignments } from "../../../structures/IApiClassroomsAssignments";
import { simple_minus_classroom_minus_assignment } from "../../../structures/simple_minus_classroom_minus_assignment";
/**
 * List assignments for a classroom.
 * Lists GitHub Classroom assignments for a classroom. Assignments will only be returned if the current user is an administrator of the GitHub Classroom.
 *
 * @tag classroom
 * @path classrooms/:classroom_id/assignments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getByClassroom_id(
  connection: IConnection<getByClassroom_id.Headers>,
  classroom_id: string,
): Promise<getByClassroom_id.Output> {
  return !!connection.simulate
    ? getByClassroom_id.simulate(connection, classroom_id)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getByClassroom_id.METADATA,
          path: getByClassroom_id.path(classroom_id),
          status: null,
        },
      );
}
export namespace getByClassroom_id {
  export type Headers = IApiClassroomsAssignments.GetHeader;
  export type Output = simple_minus_classroom_minus_assignment[];

  export const METADATA = {
    method: "GET",
    path: "/classrooms/:classroom_id/assignments",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (classroom_id: string) =>
    `/classrooms/${encodeURIComponent(classroom_id ?? "null")}/assignments`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): simple_minus_classroom_minus_assignment[] =>
    typia.random<simple_minus_classroom_minus_assignment[]>(g);
  export const simulate = (
    connection: IConnection<getByClassroom_id.Headers>,
    classroom_id: string,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: getByClassroom_id.path(classroom_id),
      contentType: "application/json",
    });
    try {
      assert.param("classroom_id")(() => typia.assert(classroom_id));
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
