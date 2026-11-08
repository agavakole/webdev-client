"use client";

import { useState, type FormEvent } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../../database";
import { emptyUser, type User } from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";

export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();

  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);

  const [person, setPerson] = useState<User>(emptyUser);
  const [addedUsers, setAddedUsers] = useState<User[]>([]);

  const users = [...db.users, ...addedUsers];

  const enrolled = users.filter((user) =>
    enrollments.some(
      (enrollment) => enrollment.user === user._id && enrollment.course === cid,
    ),
  );

  function addPerson(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUser = {
      ...person,
      _id: crypto.randomUUID(),
    };

    setAddedUsers([...addedUsers, newUser]);
    enroll(newUser._id, cid);
    setPerson({ ...emptyUser });
  }

  return (
    <div id="wd-people-table">
      <h2 className="mb-3 text-xl font-semibold">Add Person</h2>

      <form onSubmit={addPerson} className="mb-6 flex max-w-xl flex-col gap-3">
        <input
          className="rounded border border-neutral-300 px-3 py-2"
          placeholder="First name"
          value={person.firstName}
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
          required
        />

        <input
          className="rounded border border-neutral-300 px-3 py-2"
          placeholder="Last name"
          value={person.lastName}
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
          required
        />

        <input
          className="rounded border border-neutral-300 px-3 py-2"
          placeholder="Username"
          value={person.username}
          onChange={(e) => setPerson({ ...person, username: e.target.value })}
        />

        <input
          type="email"
          className="rounded border border-neutral-300 px-3 py-2"
          placeholder="Email"
          value={person.email}
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
        />

        <input
          className="rounded border border-neutral-300 px-3 py-2"
          placeholder="Login ID"
          value={person.loginId}
          onChange={(e) => setPerson({ ...person, loginId: e.target.value })}
        />

        <input
          className="rounded border border-neutral-300 px-3 py-2"
          placeholder="Section"
          value={person.section}
          onChange={(e) => setPerson({ ...person, section: e.target.value })}
        />

        <select
          className="rounded border border-neutral-300 px-3 py-2"
          value={person.role}
          onChange={(e) => setPerson({ ...person, role: e.target.value })}
        >
          <option value="STUDENT">STUDENT</option>
          <option value="TA">TA</option>
          <option value="FACULTY">FACULTY</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        <button
          type="submit"
          className="w-fit rounded bg-blue-600 px-4 py-2 text-white"
        >
          Add Person
        </button>
      </form>

      <hr className="mb-4" />

      <div id="wd-people-table" className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-300">
              <th className="p-2">Name</th>
              <th className="p-2">Login ID</th>
              <th className="p-2">Section</th>
              <th className="p-2">Role</th>
              <th className="p-2">Last Activity</th>
              <th className="p-2">Total Activity</th>
            </tr>
          </thead>

          <tbody>
            {enrolled.map((user) => (
              <tr key={user._id} className="odd:bg-neutral-50">
                <td className="p-2 text-nowrap">
                  <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                  <span>{user.firstName}</span> <span>{user.lastName}</span>
                </td>
                <td className="p-2">{user.loginId}</td>
                <td className="p-2">{user.section}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">{user.lastActivity}</td>
                <td className="p-2">{user.totalActivity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
