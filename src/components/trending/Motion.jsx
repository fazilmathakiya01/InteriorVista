import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TrendingCard = ({ image, price, description, imageHeight, imageWidth }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorework"); // 🔑 All cards redirect here
  };

  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      style={{
        width: imageWidth,
        height: imageHeight,
        borderRadius: 8,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
    >
      {/* PRICE TAG */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          background: "#FF2E2E",
          color: "#fff",
          padding: "8px 14px",
          fontFamily: "sans-serif",
          fontSize: 14,
          fontWeight: 600,
          borderTopLeftRadius: 8,
          borderBottomRightRadius: 8,
          zIndex: 3,
        }}
      >
        {price}
      </div>

      {/* IMAGE (ZOOM INSIDE & CLICKABLE) */}
      <motion.img
        src={image}
        height={imageHeight}
        width={imageWidth}
        alt="image"
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          width: imageWidth,
          height: imageHeight,
          objectFit: "cover",
          cursor: "pointer",
        }}
        onClick={handleClick}
      />

      {/* FOOTER */}
      <motion.div
        variants={{
          rest: { y: "100%" },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "22%",
          minHeight: 70,
          maxHeight: 110,
          background: "rgba(255, 46, 46, 0.65)",
          color: "#fff",
          padding: 14,
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p
          onClick={handleClick}
          style={{
            fontSize: 13,
            opacity: 0.85,
            margin: "4px 0 0",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TrendingCard;
