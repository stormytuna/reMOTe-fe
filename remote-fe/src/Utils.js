import axios from "axios";

const api = axios.create({
  baseURL: "https://remote-be.onrender.com/api",
});

export async function getUser(id) {
  const { data } = await api.get(`/user/${id}`);
  const user = data.user;
  return user;
};