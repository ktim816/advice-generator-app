import axios from 'axios';

axios.defaults.baseURL = 'https://api.adviceslip.com';

export interface Advice {
  slip: {
    id?: number;
    advice?: string;
  };
}

export const getRandomAdvice = async () => {
  try {
    const {data} = await axios.get<Advice>('/advice');
    return data;
  } catch (error) {
    console.error(error);
  }
};
