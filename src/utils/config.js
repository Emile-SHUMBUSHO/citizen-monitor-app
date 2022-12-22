import { setItemAsync, deleteItemAsync } from "expo-secure-store";

export const api_url = 'http://127.0.0.1:7000';

export const header = {
  "Content-Type": "application/json",
};

export const storeToken = async (key, value) => {
  await setItemAsync(key, value);
};

export const removerToken = async () => {
  await deleteItemAsync("token");
};
