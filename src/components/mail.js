
      // Send an greet email For Brand
    const sendMail = async (email,firstName,lastName, newBrandCode, newCompanyCode) => {
        try {
          const transporter = this.nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            service: 'gmail',
            auth: {
              user: 'umesh7dixit@gmail.com', 
              // pass: process.env.EMAIL_PASS,
              pass: 'dgvywgvfudlagahy',
              },
          });
  
          const mailOptions = {
            from:  'umesh7dixit@gmail.com',
            to: email,
            subject: 'Welcome to RePut',
           

            html:`
              <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
        color: #2C3E50;
        line-height: 1.6;
      }
      .header {
        background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%);
        color: white;
        padding: 28px 20px;
        text-align: center;
        border-radius: 4px 4px 0 0;
      }
      .content {
        padding: 40px 30px;
        background-color: #ffffff;
        border: 1px solid #E5E7EB;
        border-top: none;
        border-radius: 0 0 4px 4px;
      }
            .details-box {
      background-color: #f5f5f5;
      border-left: 4px solid #4A90E2;
      padding: 15px;
      margin: 20px 0;
    }
      .button {
        background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%);
        color: white !important;
        padding: 14px 32px;
        text-decoration: none;
        border-radius: 4px;
        display: inline-block;
        margin: 25px 0;
        font-weight: 500;
        font-size: 16px;
        transition: all 0.3s ease;
      }
      .footer {
        text-align: center;
        padding: 20px;
        font-size: 12px;
        color: #64748B;
      }
    </style>
  </head>
  <body style="margin: 0; padding: 20px; background-color: #F3F4F6;">
    <div class="email-container">
      <div class="header">
        <h1 style="margin: 0; font-size: 28px; font-weight: 600;">Welcome to RePut</h1>
      </div>
      
      <div class="content">
        <p style="font-size: 16px; color: #1E3A8A; margin-top: 0;">Dear ${firstName + ' ' + lastName},</p>
        
        <p style="font-size: 16px; margin: 20px 0;">
          We are thrilled to welcome you to the RePut TraceChain Platform, where supply chain transparency meets innovation. By joining us, you’re taking a significant step toward fostering sustainability, accountability, and trust in your supply chain.
        </p>

        <ul style="font-size: 16px; margin: 20px 0;">
          <li>End-to-End Traceability: Gain comprehensive visibility into your supply chain from origin to delivery.</li>
          <li>Sustainability Insights: Measure and showcase your sustainability efforts through carbon footprint and impact assessments.</li>
          <li>Seamless Collaboration: Strengthen relationships with suppliers and stakeholders via our secure and tamper-proof blockchain-powered platform.</li>
        </ul>

       
          <div class="details-box">
            <h3>Details of Your Partnership:</h3>
            <ul class="no-style">
              ${newBrandCode ? `<li><strong>Brand Code:</strong> ${newBrandCode}</li>` : ''}
              ${newCompanyCode ? `<li><strong>Company Code:</strong> ${newCompanyCode}</li>` : ''}
            </ul>
          </div>
       
        

        <center>
          <a href="${process.env.LOGIN_URL || 'http://reputai-env.eba-hrbeky3q.ap-south-1.elasticbeanstalk.com/login'}" class="button">
            Access Your Account
          </a>
        </center>

        <p style="margin: 25px 0; font-size: 16px;">
          Warm regards,<br/>
          <strong>The RePut Team</strong>
        </p>
      </div>
      
      <div class="footer">
        <p style="margin: 0;">© ${new Date().getFullYear()} RePut. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>

            `
          };
  
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.messageId);
  
  
          return true;
        } catch (emailError) {
  
          console.error('Error sending email:  ', emailError.message);
          return false;
        }
      }

