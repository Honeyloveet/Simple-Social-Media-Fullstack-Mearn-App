import { Box } from "@mui/material";
import baseUrl from "common/constants";

const UserImage = ({ image, size = "60px" }) => {

  // const baseUrl = `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}`;

  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${baseUrl}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
