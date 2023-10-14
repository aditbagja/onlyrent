/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
const OrderList = (props) => {
  return (
    <>
      <div className="py-2 px-2 border-b-4 border-primary mb-3">
        <p>Order List</p>
      </div>
      {props.orderData.length > 0
        ? props.orderData.map((order) =>
            order.id == null ? null : (
              <div key={order.id}>
                <div className="px-2 lg:px-0 flex justify-between">
                  <img
                    src={require(order.image)}
                    className="w-24"
                    alt={order.nama}
                  />
                  <p className="font-bold my-auto">{order.nama}</p>
                  <button
                    onClick={() => props.cancelOrder(order.id)}
                    className="bg-red-500 text-white rounded-md p-2">
                    Cancel
                  </button>
                </div>
              </div>
            )
          )
        : null}
    </>
  );
};

export default OrderList;
