import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";
import { NextResponse } from "next/server";

const resend = new Resend("re_XQPUiEeE_tpPxEK7aGVfgN9LZ3YpKDh3x");

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["quijivix46@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ datos: formValue }),
      text: "Esta es la informacion del cliente: ",
    });
    console.log(data);

    return NextResponse.json({ message: "email enviado" }, { satus: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
    
  }
}
