//domain/.netlify/functions
require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, totalAmount, email } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      return totalAmount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount() * 100,
        currency: "usd",
        description: email + ' - - - ' + cart
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {}
  }
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
