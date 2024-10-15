const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  // select * from accounts;
  return db('accounts')
}

const getById = id => {
  // DO YOUR MAGIC
  //select * from accounts WHERE id = 1;
  return db('accounts').where('id', id).first()
}

const create = async account =>{
  const [id] = await db('acount').insert(account)
  return getById(id)
}

const updateById = (id, account) => {
  return db('accounts').where(id).update(account)
}

const deleteById = id => {
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
