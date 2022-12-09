import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Text, useColorModeValue  } from "@chakra-ui/react";

export default function TypedText() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Fullstack Developer ", "Frontend Engineer", "Backend Engineer", "Web Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 50,
      backDelay: 500,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: ""
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      
      {/* Element to display typing strings */}

      <h2>Hello 👋, I&apos;m
      <Text ml={1} ref={el} as='mark' rounded='sm'
          backgroundColor={useColorModeValue('#88ccca')}></Text> based in Indonesia!</h2>
    </div>
  );
}