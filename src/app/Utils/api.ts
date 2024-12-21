import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// User API
export const getUsers = async () => {
  try {
    const response = await api.get('/user');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};

export const createUser = async (user: { 
  nome: string; 
  email: string; 
  senha: string; 
  curso: string; 
  departamento: string; 
}) => {
  try {
    const response = await api.post('/user', user); // Faz a requisição POST para o endpoint do back-end
    return response.data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};

export const updateUser = async (id: string, user: { name?: string; email?: string }) => {
  try {
    const response = await api.patch(`/user/${id}`, user);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    await api.delete(`/user/${id}`);
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    throw error;
  }
};

// Comments API
export const getComments = async () => {
    try {
      const response = await api.get('/comments');
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
      throw error;
    }
};

export const createComment = async (comment: { userId: string; evaluationId: string; content: string }) => {
    try {
      const response = await api.post('/comments', comment);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar comentário:", error);
      throw error;
    }
};

export const updateComment = async (id: string, comment: { content?: string }) => {
    try {
      const response = await api.patch(`/comments/${id}`, comment);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar comentário:", error);
      throw error;
    }
};

export const deleteComment = async (id: string) => {
    try {
      await api.delete(`/comments/${id}`);
    } catch (error) {
      console.error("Erro ao deletar comentário:", error);
      throw error;
    }
};

// Evaluations API
export const getAvaliacao = async () => {
    try {
      const response = await api.get('/avaliacao');
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar avaliações:", error);
      throw error;
    }
};

export const createAvaliacao = async (avaliacao: { userId: string; content: string; score: number }) => {
    try {
      const response = await api.post('/avaliacao', avaliacao);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar avaliação:", error);
      throw error;
    }
};

export const updateAvaliacao = async (id: string, avaliacao: { content?: string; score?: number }) => {
    try {
      const response = await api.patch(`/avaliacao/${id}`, avaliacao);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar avaliação:", error);
      throw error;
    }
};

export const deleteAvaliacao = async (id: string) => {
    try {
      await api.delete(`/avaliacao/${id}`);
    } catch (error) {
      console.error("Erro ao deletar avaliação:", error);
      throw error;
    }
};
