// src/emails/ContactFormEmail.tsx
import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Container,
  Text,
  Section,
  Hr,
  Preview,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  contactInfo: string;
  service?: string; // Сделаем необязательным на всякий случай
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  contactInfo,
  service,
  message,
}) => (
  <Html>
    <Head />
    <Preview>Новая заявка с сайта Комплекс Медиа от {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Новая заявка с сайта Комплекс Медиа</Heading>
        <Section style={section}>
          <Text style={paragraph}>
            <strong>Имя:</strong> {name}
          </Text>
          <Text style={paragraph}>
            <strong>Контакт (Email/Telegram):</strong> {contactInfo}
          </Text>
          {service && (
            <Text style={paragraph}>
              <strong>Услуга:</strong> {service}
            </Text>
          )}
        </Section>
        <Hr style={hr} />
        <Section style={section}>
          <Heading as="h2" style={subHeading}>
            Сообщение:
          </Heading>
          {/* Преобразуем переносы строк в <br> */}
          <Text
            style={paragraph}
            dangerouslySetInnerHTML={{
              __html: message.replace(/\n/g, "<br />"),
            }}
          />
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          Отправлено с формы контактов на сайте komplex-media.ru
        </Text>{" "}
        {/* Замените на ваш домен */}
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

// --- Стили --- (можно вынести в отдельный объект)
const main = {
  backgroundColor: "#f4f4f4", // Светлый фон для email
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  backgroundColor: "#ffffff", // Белый фон контейнера
  border: "1px solid #eaeaea",
  borderRadius: "5px",
};

const heading = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#333",
  padding: "0 40px",
};

const subHeading = {
  fontSize: "18px",
  lineHeight: "1.3",
  fontWeight: "600",
  color: "#444",
  padding: "0 40px",
};

const section = {
  padding: "0 40px",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "1.5",
  color: "#555",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#888888",
  fontSize: "12px",
  textAlign: "center" as const, // Исправлено для типа
  padding: "0 40px",
};
