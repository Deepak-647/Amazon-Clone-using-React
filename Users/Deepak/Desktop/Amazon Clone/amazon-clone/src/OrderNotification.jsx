const OrderNotification = ({ show }) => {
    return (
      <div className="notification">
        <p>
          Thank you for ordering from   
          <span style={{ color: " rgb(234 88 12)" }}> amazon</span>
        </p>
        <p>Your Order Placed successfully !</p>
        <span className="notification_progress"></span>
      </div>
    );
  };
  export default OrderNotification;