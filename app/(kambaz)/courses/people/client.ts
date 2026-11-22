import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const PEOPLE_API = `${HTTP_SERVER}/api/people`;
const COURSES_API = `${HTTP_SERVER}/api/courses`;

export const findPeopleForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/users`);
  return response.data;
};

export const createPerson = async (courseId: string, person: unknown) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/users`,
    person
  );
  return response.data;
};

export const updatePerson = async (person: { _id: string }) => {
  const response = await axiosWithCredentials.put(
    `${PEOPLE_API}/${person._id}`,
    person
  );
  return response.data;
};

export const deletePerson = async (userId: string) => {
  const response = await axiosWithCredentials.delete(`${PEOPLE_API}/${userId}`);
  return response.data;
};
