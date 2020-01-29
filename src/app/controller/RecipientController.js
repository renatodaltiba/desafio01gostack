import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const dados = await Recipient.create(req.body);

    return res.json(dados);
  }

  async update(req, res) {

    const recipient = await Recipient.findByPk(req.params.id);

    if(!recipient){
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { name, rua, number, complemento, estado, cidade, cep } = await recipient.update(req.body);

    return res.json({
      name,
      rua,
      number,
      complemento,
      estado,
      cidade,
      cep
    })
  }
}

export default new RecipientController();
