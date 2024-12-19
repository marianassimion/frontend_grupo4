import axios from 'axios';

// Configuração da API base
const api = axios.create({
  baseURL: 'http://localhost:3000', // Substitua pelo endereço do seu back-end
});

// Métodos CRUD
export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};

export const createUser = async (user: { name: string; email: string }) => {
  try {
    const response = await api.post('/users', user);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};

export const updateUser = async (id: string, user: { name?: string; email?: string }) => {
  try {
    const response = await api.patch(`/users/${id}`, user);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    await api.delete(`/users/${id}`);
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    throw error;
  }
};
