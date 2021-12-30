import React from 'react';
import { Box, IPressableProps, Pressable as NBPressable } from 'native-base';

interface Props extends IPressableProps {
  children: React.ReactNode;
}

const Pressable: React.FC<Props> = ({ children, ...props }) => {
  return (
    <NBPressable {...props}>
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Box
            style={{
              opacity: isHovered || isFocused || isPressed ? 0.4 : 1,
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
          >
            {children}
          </Box>
        );
      }}
    </NBPressable>
  );
};

export default Pressable;
