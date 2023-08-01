import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  let { donationId } = await request.json();

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: donationId,
        quantity: 1,
      },
    ],

    mode: "payment",

    success_url: `${request.header.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${request.header.origin}/cancel`,
  });

  return NextResponse.json(session);
}