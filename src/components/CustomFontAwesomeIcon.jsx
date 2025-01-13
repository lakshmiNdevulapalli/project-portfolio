import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomFontAwesomeIcon = ({ icon, color = "black", size = "2x", ...props }) => {
	// Validate the icon object
	if (!icon || !icon.iconName) {
		console.error("Invalid icon object passed to CustomFontAwesomeIcon:", icon);
		return null; // Render nothing for invalid icons
	}

	return (
		<FontAwesomeIcon
			icon={icon}
			color={color}
			size={size}
			{...props}
		/>
	);
};

export default CustomFontAwesomeIcon;