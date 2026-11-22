"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { emptyUser, type User } from "../../../../account/AccountContext";
import * as client from "../../../people/client";

export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  const [person, setPerson] = useState<User>(emptyUser);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPeople = async () => {
      try {
        const people = await client.findPeopleForCourse(cid);
        setUsers(people);
      } catch {
        setError("Unable to load people for this course.");
      }
    };

    loadPeople();
  }, [cid]);

  const savePerson = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    try {
      if (person._id) {
        const updated = await client.updatePerson(person);
        setUsers(users.map((user) => user._id === updated._id ? updated : user));
      } else {
        const created = await client.createPerson(cid, person);
        setUsers([...users, created]);
      }

      setPerson({ ...emptyUser });
    } catch {
      setError("You must be signed in as faculty or admin to manage people.");
    }
  };

  const editPerson = (user: User) => {
    setPerson(user);
  };

  const removePerson = async (userId: string) => {
    setError("");

    try {
      await client.deletePerson(userId);
      setUsers(users.filter((user) => user._id !== userId));
    } catch {
      setError("You must be signed in as faculty or admin to delete people.");
    }
  };

  return (
    <div id="wd-people-table">
      <h2 className="mb-3 text-xl font-semibold">Add or Update Person</h2>

      <form onSubmit={savePerson} className="mb-6 flex max-w-xl flex-col gap-3">
        <input
          className="rounded border border-neutral-300 px-3 py-2"
          placeholder="First name"
          value={person.firstName}
          onChange={(event) => setPerson({ ...person, firstName: event.target.value })}
          required
        />
        <input
          className="rounded border border-neutral-300 px-3 py-2"
          placeholder="Last name"
          value={person.lastName}
          onChange={(event) => setPerson({ ...person, lastName: event.target.value })}
          required
        />
        <input
          className="rounded border border-neutral-300 px-3 py-2"
          placeholder="Username"
          value={person.username}
          onChange={(event) => setPerson({ ...person, username: event.target.value })}
        />
        <input
          type="password"
          className="rounded border border-neutral-300 px-3 py-2"
          placeholder="Password"
          value={person.password}
          onChange={(event) => setPerson({ ...person, password: event.target.value })}
        />
        <input
          type="email"
          className="rounded border border-neutral-300 px-3 py-2"
          placeholder="Email"
          value={person.email}
          onChange={(event) => setPerson({ ...person, email: event.target.value })}
        />
        <input
          className="rounded border border-neutral-300 px-3 py-2"
          placeholder="Login ID"
          value={person.loginId}
          onChange={(event) => setPerson({ ...person, loginId: event.target.value })}
        />
        <input
          className="rounded border border-neutral-300 px-3 py-2"
          placeholder="Section"
          value={person.section}
          onChange={(event) => setPerson({ ...person, section: event.target.value })}
        />
        <select
          className="rounded border border-neutral-300 px-3 py-2"
          value={person.role}
          onChange={(event) => setPerson({ ...person, role: event.target.value as User["role"] })}
        >
          <option value="STUDENT">STUDENT</option>
          <option value="TA">TA</option>
          <option value="FACULTY">FACULTY</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        <div className="flex gap-2">
          <button type="submit" className="w-fit rounded bg-blue-600 px-4 py-2 text-white">
            {person._id ? "Update Person" : "Add Person"}
          </button>
          {person._id && (
            <button
              type="button"
              onClick={() => setPerson({ ...emptyUser })}
              className="rounded border border-neutral-300 px-4 py-2"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {error && <p className="mb-3 rounded bg-red-100 px-3 py-2 text-red-800">{error}</p>}

      <hr className="mb-4" />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-300">
              <th className="p-2">Name</th>
              <th className="p-2">Login ID</th>
              <th className="p-2">Section</th>
              <th className="p-2">Role</th>
              <th className="p-2">Last Activity</th>
              <th className="p-2">Total Activity</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
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
                <td className="p-2">
                  <div className="flex gap-2">
                    <button type="button" className="text-blue-600" onClick={() => editPerson(user)}>
                      Edit
                    </button>
                    <button type="button" className="text-red-600" onClick={() => removePerson(user._id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
