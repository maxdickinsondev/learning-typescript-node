import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Max', email: 'maxsantistadickinson@gmail.com' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailservice = new EmailService();

    emailservice.sendMail({
      to: { 
        name: 'Max Dickinson', 
        email: 'maxsantistadickinson@gmail.com' 
      },
      message: { 
        subject: 'Mensagem de boas vindas', 
        body: 'Seja bem-vindo ao sistema' 
      }
    });

    return res.send();
  }
};