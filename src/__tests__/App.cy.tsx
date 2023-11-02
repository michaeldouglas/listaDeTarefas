
import ItemList from '../components/Items/ItemList';
import CreateItemForm from '../components/Items/CreateItemForm';
import { mount } from '@cypress/react18'

describe('Test: <ItemList>', () => {
  const newItem = {
    text: "New Item",
    date: "2023-10-14",
  };

  it('mounts Empty ItemList', () => {
    mount(<ItemList items={[]} deleteItem={() => { }} updateItem={() => { }} />)
  })

  it('mounts ItemList', () => {
    mount(<ItemList items={[newItem]} deleteItem={() => { }} updateItem={() => { }} />)
  })

  it('mounts CreateItem', () => {

    mount(<CreateItemForm addItem={() => newItem} />)
  })
})