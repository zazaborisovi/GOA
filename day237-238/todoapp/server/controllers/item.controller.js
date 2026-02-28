const { writeItems, readItems } = require("../utils/file")

const addItem = async (req, res) => {
  const { id , value } = req.body
  
  if(!value) return res.status(400).json({ message: 'Value is required' })
  
  const newItem = {
    id,
    value,
  }
  
  writeItems([...readItems(), newItem])
  res.status(201).json({ items: [...readItems(), newItem] })
}

const getItems = async (req, res) => {
  const items = readItems()
  res.status(200).json({ items })
}

const deleteItem = async (req, res) => {
  try {
    const { id } = req.body
    
    let items = readItems()
    
    items = items.filter(i => i.id !== id)
    console.log(items)
    writeItems(items)
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
}

module.exports = { addItem, getItems , deleteItem };