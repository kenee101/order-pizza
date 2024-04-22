import { formatCurrency } from '../../utils/helpers';
import PropTypes from 'prop-types';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';
import { useSelector } from 'react-redux';

CartItem.propTypes = {
  item: PropTypes.object,
};

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="flex items-center justify-between py-3">
      <p className="mb-1 md:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
