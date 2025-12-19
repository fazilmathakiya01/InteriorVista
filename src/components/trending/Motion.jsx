import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TrendingCard = ({ image, price, description, imageHeight, imageWidth }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{
        width: imageWidth,
        height: imageHeight,
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
        cursor: "pointer",
      }}
      onClick={() => navigate("/explorework")}
    >
      {/* PRICE */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          background: "#FF2E2E",
          color: "#fff",
          padding: "8px 14px",
          fontFamily: "sans-serif",
          fontSize: 13,
          fontWeight: 600,
          zIndex: 2,
          borderBottomRightRadius: 8,
        }}
      >
        {price}
      </div>

      {/* IMAGE */}
      <motion.img
        src={image}
        alt="trending"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* FOOTER */}
      <motion.div
        variants={{
          rest: { y: "100%" },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "16%",
          background: "hsla(0, 92.70%, 48.00%, 0.65)",
          display: "flex",
          alignItems: "center",
          padding: 14,
          color: "#fff",
          fontFamily: "sans-serif",
          fontSize: 16,
        }}
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

export default TrendingCard;
