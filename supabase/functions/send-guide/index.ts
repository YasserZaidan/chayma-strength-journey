import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SendGuideRequest {
  name: string;
  email: string;
  pdfData: string; // base64 encoded PDF
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, pdfData }: SendGuideRequest = await req.json();

    // Convert base64 to Uint8Array
    const pdfBuffer = Uint8Array.from(atob(pdfData), c => c.charCodeAt(0));

    const emailResponse = await resend.emails.send({
      from: "Chayma Al Zein <onboarding@resend.dev>",
      to: [email],
      subject: "Your Free Hormonal Balance Guide is Here! 🌸",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #8B5CF6, #EC4899); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Your Guide is Ready! 🌸</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Hi ${name}!</h2>
            
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              Thank you for downloading your <strong>"5 Daily Stretches for Hormonal Balance"</strong> guide! 
              I'm so excited to be part of your wellness journey.
            </p>
            
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              Your personalized PDF guide is attached to this email. It includes:
            </p>
            
            <ul style="color: #555; font-size: 16px; line-height: 1.8; margin: 20px 0;">
              <li>5 carefully selected stretches for hormonal balance</li>
              <li>Beautiful illustrations and step-by-step instructions</li>
              <li>Benefits of each stretch for your hormonal health</li>
              <li>Best times to practice each movement</li>
              <li>Tips for creating a successful daily routine</li>
            </ul>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #8B5CF6; margin: 25px 0;">
              <p style="color: #333; margin: 0; font-style: italic;">
                "Remember, consistency is key. Even 10 minutes a day can make a significant difference 
                in how you feel and how your body functions."
              </p>
            </div>
            
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              If you have any questions or would like personalized guidance, I'm here to help:
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #333;">
                📧 <strong>Email:</strong> chayma.al.zein@gmail.com<br>
                📱 <strong>WhatsApp:</strong> +961 70 462 210<br>
                📸 <strong>Instagram:</strong> @chayma.al.zein
              </p>
            </div>
            
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              Wishing you strength, balance, and radiant health!
            </p>
            
            <p style="color: #8B5CF6; font-size: 18px; font-weight: bold; margin-bottom: 0;">
              With love and light,<br>
              Chayma ✨
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #888; font-size: 12px;">
            <p>You're receiving this because you requested our free wellness guide. 
            <a href="#" style="color: #8B5CF6;">Unsubscribe</a> anytime.</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: `5-Daily-Stretches-for-Hormonal-Balance-${name.replace(/\s+/g, '-')}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    console.log("Guide email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, messageId: emailResponse.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-guide function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);