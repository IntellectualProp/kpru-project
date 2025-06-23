"use client";
import { useParams } from "next/navigation";
import {
  FaReact,
  FaBook,
  FaCopyright,
  FaTrademark,
  FaLightbulb,
  FaGavel,
  FaUniversity,
  FaGlobe,
  FaShieldAlt,
  FaHandshake,
  FaFileContract,
  FaBalanceScale,
} from "react-icons/fa";

const cardItems = [
  {
    id: 1,
    title: "Card Title 1",
    icon: FaReact,
    backgroundColor: "#6f6d6d",
    description: "รายละเอียดเกี่ยวกับหัวข้อที่ 1",
  },
  {
    id: 2,
    title: "Card Title 2",
    icon: FaBook,
    backgroundColor: "#cd2a2a",
    description: "รายละเอียดเกี่ยวกับหัวข้อที่ 2",
  },
  {
    id: 3,
    title: "Card Title 3",
    icon: FaCopyright,
    backgroundColor: "#cbc3c3",
    description: "รายละเอียดเกี่ยวกับหัวข้อที่ 3",
  },
  {
    id: 4,
    title: "Card Title 4",
    icon: FaTrademark,
    backgroundColor: "#6f1f1f",
    description: "รายละเอียดเกี่ยวกับหัวข้อที่ 4",
  },
  {
    id: 5,
    title: "Card Title 5",
    icon: FaLightbulb,
    backgroundColor: "#b8afaf",
    description: "รายละเอียดเกี่ยวกับหัวข้อที่ 5",
  },
  {
    id: 6,
    title: "Card Title 6",
    icon: FaGavel,
    backgroundColor: "#a72424",
    description: "รายละเอียดเกี่ยวกับหัวข้อที่ 6",
  },
  {
    id: 7,
    title: "Card Title 7",
    icon: FaUniversity,
    backgroundColor: "#6f6d6d",
    description: "รายละเอียดเกี่ยวกับหัวข้อที่ 7",
  },
  {
    id: 8,
    title: "Card Title 8",
    icon: FaGlobe,
    backgroundColor: "#cd2a2a",
    description: "รายละเอียดเกี่ยวกับหัวข้อที่ 8",
  },
  {
    id: 9,
    title: "Card Title 9",
    icon: FaShieldAlt,
    backgroundColor: "#cbc3c3",
    description: "รายละเอียดเกี่ยวกับหัวข้อที่ 9",
  },
  {
    id: 10,
    title: "Card Title 10",
    icon: FaHandshake,
    backgroundColor: "#6f1f1f",
    description: "รายละเอียดเกี่ยวกับหัวข้อที่ 10",
  },
  {
    id: 11,
    title: "Card Title 11",
    icon: FaFileContract,
    backgroundColor: "#b8afaf",
    description: "รายละเอียดเกี่ยวกับหัวข้อที่ 11",
  },
  {
    id: 12,
    title: "Card Title 12",
    icon: FaBalanceScale,
    backgroundColor: "#a72424",
    description: "รายละเอียดเกี่ยวกับหัวข้อที่ 12",
  },
];

export default function CardDetailPage() {
  const params = useParams();
  const id = parseInt(params.id);
  const card = cardItems.find((item) => item.id === id);

  if (!card) {
    return <p>Card not found.</p>;
  }

  const Icon = card.icon;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#f0f0f0",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: card.backgroundColor,
          borderRadius: "24px",
          padding: "3rem 4rem",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25)",
          maxWidth: "800px",
          width: "100%",
          color: "white",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <div style={{ flexShrink: 0 }}>
          <Icon size={100} />
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            {card.title}
          </h1>
          <p style={{ fontSize: "1.25rem", lineHeight: "1.8" }}>
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}
